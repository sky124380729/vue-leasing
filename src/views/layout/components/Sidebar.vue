<template>
    <section class="sidebar">
        <el-menu :collapse="false"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router >
            <div v-for="item in menuList" :key="item.name">
                <!-- 有子菜单 -->
                <el-submenu :index="item.path" v-if="item.children&&item.children.length">
                    <template slot="title">
                        <i :class="item.meta.icon || 'el-icon-success'"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </template>
                    <el-menu-item :index="item.path+'/'+subItem.path" v-for="subItem in item.children" :key="subItem.name">
                        <i :class="item.meta.icon || 'el-icon-success'"></i>
                        <span slot="title">{{subItem.meta.title}}</span>
                    </el-menu-item>
                </el-submenu>
                <!-- 没有子菜单 -->
                <el-menu-item :index="item.path" v-else>
                    <i :class="item.meta.icon || 'el-icon-success'"></i>
                    <span slot="title">{{item.meta.title}}</span>
                </el-menu-item>
            </div>
        </el-menu>

    </section>
</template>

<script>
import { asyncMap } from '@/router'

// 递归获取所有有menu为true的列表
function filterRouter(asyncRouterMap) {
    const accesseRouters = asyncRouterMap.filter(item => {
        if (item.meta.menu) {
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
            console.log(filterRouter(asyncMap))
            return filterRouter(asyncMap)
        }
    },
    created() {
        console.log(this.menuList)
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
