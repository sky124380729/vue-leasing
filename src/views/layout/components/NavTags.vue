<template>
    <section class="navTags">
        <div class="tag-container">
            <el-tag v-for="(item,index) in navTags" :key="item.title+index" closable :class="{isActive:$route.path === item.path}" @close="closeTag(item)" @contextmenu.native.prevent="openModel">
                <router-link :to="item.path">{{item.title}}</router-link>
            </el-tag>
        </div>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'Vuex'
export default {
    data() {
        return {

        }
    },
    watch: {
        $route(route) {
            this.addTag(route)
        }
    },
    computed: {
        ...mapGetters(['navTags'])
    },
    methods: {
        ...mapMutations(['ADD_NAVTAGS', 'DEL_NAVTAGS']),
        // 添加标签
        addTag(route) {
            if (!route.name) return
            this.ADD_NAVTAGS({
                path: route.path,
                title: route.meta.title,
                name: route.name
            })
        },
        // 删除标签
        closeTag(tag) {
            if (this.navTags.length === 1) {
                this.$router.push({
                    path: '/platform/index',
                    title: '中央控制台',
                    name: 'platform'
                })
            } else if (this.$route.path === tag.path) {
                for (const [index, item] of this.navTags.entries()) {
                    if (item.path === tag.path) {
                        if (index !== this.navTags.length - 1) {
                            this.$router.push(this.navTags[index + 1])
                        } else if (index !== 0) {
                            this.$router.push(this.navTags[index - 1])
                        }
                        break
                    }
                }
            }
            // 执行删除操作
            this.DEL_NAVTAGS(tag)
        },
        // 打开关闭窗口
        openModel() {
            console.log('右击了')
        }
    },
    mounted() {
        this.addTag(this.$route)
    }
}
</script>

<style lang="scss" scoped>
.navTags {
  position: relative;
  width: 100%;
  height: 32px;
  overflow: hidden;
  white-space: nowrap;
  .tag-container {
    position: absolute;
  }
  .el-tag {
    margin-right: 6px;
    a {
      display: inline-block;
    }
    &.isActive {
      background-color: rgba(64, 158, 255, 0.3);
    }
  }
}
</style>
