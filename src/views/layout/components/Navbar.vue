<template>
    <section class="navbar">
        <div class="menubar">
            <!-- <i class="fa" :class="`${$store.state.collapse?'fa-indent':'fa-outdent'}`" @click="changeCollapse"></i> -->
            <i class="fa fa-th-list" :class="{'fa-rotate-90':$store.state.collapse}" @click="changeCollapse"></i>
            <!-- 面包屑导航 -->
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="item in breadList" :key="item.name" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
            </el-breadcrumb>

            <!-- 右侧菜单项 -->
            <div class="fr menu-right">

                <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
                    <i class="fa fa-arrows-alt"></i>
                </el-tooltip>

                <el-dropdown>
                    <!-- <img class="person-img" src="../../../assets/mapleWorld.jpg" width="40" height="40" alt=""> -->
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>黄金糕</el-dropdown-item>
                        <el-dropdown-item>狮子头</el-dropdown-item>
                        <el-dropdown-item>螺蛳粉</el-dropdown-item>
                        <el-dropdown-item>双皮奶</el-dropdown-item>
                        <el-dropdown-item divided>退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>

            </div>

        </div>
        <nav-tags></nav-tags>
    </section>
</template>

<script>
import NavTags from './NavTags'
export default {
    data() {
        return {}
    },
    computed: {
        breadList() {
            return this.$route.matched
        }
    },
    methods: {
        changeCollapse() {
            this.$store.commit('SET_COLLAPSE', !this.$store.state.collapse)
        }
    },
    components: {
        NavTags
    }
}
</script>

<style lang="scss" scoped>
    .menubar {
        height: 50px;
        line-height: 50px;
    }
    .fa {
        color: #363c42;
        cursor: pointer;
        transition: all .4s;
    }
</style>
