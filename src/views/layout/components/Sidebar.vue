<template>
    <el-scrollbar wrapClass="scrollbar-wrapper">
        <!--
            default-active="$route.path" 路径等于当前路由，可以让路由在跳转的时候对应高亮
            unique-opened 是否只保持一个菜单展开
         -->
        <el-menu :collapse="collapse" background-color="#363C42" text-color="#fff" active-text-color="#ffd04b" router :default-active="activePath" unique-opened>
            <div v-for="item in menuList" :key="item.name">
                <!-- 有子菜单 -->
                <el-submenu :index="item.path" v-if="item.children&&item.children.length">
                    <template slot="title">
                        <i :class="item.meta&&item.meta.icon || 'el-icon-success'"></i>
                        <span slot="title">{{item.meta&&item.meta.title}}</span>
                    </template>
                    <el-menu-item :index="item.path+'/'+subItem.path" v-for="subItem in item.children" :key="subItem.name">
                        <i :class="item.meta&&item.meta.icon || 'el-icon-success'"></i>
                        <span slot="title">{{subItem.meta&&subItem.meta.title}}</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 没有子菜单 -->
                <el-menu-item :index="item.path" v-else>
                    <i :class="item.meta&&item.meta.icon || 'el-icon-success'"></i>
                    <span slot="title">{{item.meta&&item.meta.title}}</span>
                </el-menu-item>
            </div>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import { asyncMap } from '@/router'

// 递归获取所有有menu为true的列表
function filterRouter(asyncRouterMap) {
    const accesseRouters = asyncRouterMap.filter(item => {
        if (item.meta && item.meta.menu) {
            if (item.children && item.children.length) {
                item.children = filterRouter(item.children)
            }
            return true
        } else {
            return false
        }
    })
    return accesseRouters
}

export default {
    computed: {
        menuList() {
            return filterRouter(asyncMap)
        },
        collapse() {
            return this.$store.state.collapse
        },
        activePath() {
            if (/\/index$/.test(this.$route.path)) {
                return this.$route.path.substring(0, this.$route.path.length - 6)
            } else {
                return this.$route.path
            }
        }
    },
    methods: {

    },
    created() {
    }
}
</script>

<style lang="scss" scoped>
</style>
