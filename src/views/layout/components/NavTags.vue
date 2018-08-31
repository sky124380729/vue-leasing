<template>
    <section class="navTags">
        <el-tag v-for="(item,index) in navTags" :key="item.title+index" closable :class="{isActive:$route.path === item.path}" @close="closeTag(item)" >
            <router-link :to="item.path">{{item.title}}</router-link>
        </el-tag>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    watch: {
        $route(route) {
            this.addTag()
        }
    },
    computed: {
        navTags() {
            return this.$store.getters.navTags
        }
    },
    methods: {
        // 添加标签
        addTag() {
            this.$store.commit('ADD_NAVTAGS', {
                title: this.$route.meta.title,
                path: this.$route.path,
                name: this.$route.name,
                cache: this.$route.meta.cache
            })
        },
        // 删除标签
        closeTag(tag) {
            // 如果当前关闭的标签是激活的标签，重新跳转
            if (this.$route.path === tag.path) {
                for (const [index, item] of this.$store.state.navTags.entries()) {
                    if (item.path === tag.path && index !== 0) {
                        this.$router.push(this.$store.state.navTags[index - 1])
                        break
                    }
                }
            }
            // 执行删除操作
            this.$store.commit('DEL_NAVTAGS', tag)
        }
    },
    mounted() {
        this.addTag()
    }
}
</script>

<style lang="scss" scoped>
.navTags {
  padding: 10px;
  .el-tag {
    margin-right: 10px;
    a {
      display: inline-block;
    }
    &.isActive {
      background-color: rgba(64, 158, 255, 0.3);
    }
  }
}
</style>
