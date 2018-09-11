<template>
    <section class="navTags">
        <div class="tag-container">
            <el-tag v-for="(item,index) in navTags" :key="item.title+index" closable :class="{isActive:$route.path === item.path}" @close="closeTag(item)" @contextmenu.prevent.native="openMenu(item,$event)">
                <router-link :to="item.path">{{item.title}}</router-link>
            </el-tag>
        </div>
        <ul class='contextmenu' v-show="visible" :style="{left:left+'px',top:top+'px'}">
            <li @click="closeSelectedTag(selectedTag)">关闭</li>
            <li @click="closeOthersTags">关闭其他</li>
            <li @click="closeAllTags">关闭所有</li>
        </ul>
    </section>
</template>

<script>
import { mapGetters, mapMutations } from 'Vuex'
export default {
    data() {
        return {
            visible: false,
            top: 0,
            left: 0,
            selectedTag: {}
        }
    },
    watch: {
        $route(route) {
            this.addTag(route)
        },
        visible(value) {
            if (value) {
                document.body.addEventListener('click', this.closeMenu)
            } else {
                document.body.removeEventListener('click', this.closeMenu)
            }
        }
    },
    computed: {
        ...mapGetters(['navTags'])
    },
    methods: {
        ...mapMutations(['ADD_NAVTAGS', 'DEL_NAVTAGS', 'DEL_OTHER_NAVTAGS', 'DEL_ALL_NAVTAGS']),
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
            // 控制路由重新跳转
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
        closeSelectedTag(tag) {
            this.closeTag(tag)
            this.visible = false
        },
        closeOthersTags() {
            // 执行删除操作
            this.$router.push(this.selectedTag)
            this.DEL_OTHER_NAVTAGS(this.selectedTag)
        },
        closeAllTags() {
            this.DEL_ALL_NAVTAGS()
            this.$router.push({
                path: '/platform/index',
                title: '中央控制台',
                name: 'platform'
            })
        },
        openMenu(tag, e) {
            this.visible = true
            this.selectedTag = tag
            const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
            this.left = e.clientX - offsetLeft
            this.top = e.clientY - 25
        },
        closeMenu() {
            this.visible = false
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
  white-space: nowrap;
  .tag-container {
    position: absolute;
  }
  .contextmenu {
    margin: 0;
    background: #fff;
    z-index: 100;
    position: absolute;
    list-style-type: none;
    padding: 5px 0;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #333;
    box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.3);
    li {
      margin: 0;
      padding: 7px 16px;
      cursor: pointer;
      &:hover {
        background: #eee;
      }
    }
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
