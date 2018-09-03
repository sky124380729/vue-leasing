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
                    <span class="el-dropdown-link">
                        <img class="person-img" src="../../../assets/timg.gif" alt="">
                        <i>Pink丶缤</i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logOut">退出登录</el-dropdown-item>
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
        // 改变左侧菜单收缩
        changeCollapse() {
            this.$store.commit('SET_COLLAPSE', !this.$store.state.collapse)
        },
        // 退出登录
        logOut() {
            this.$router.push({
                path: '/login'
            })
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
    .menu-right {
        height: 50px;
        line-height: 50px;
    }
    .el-dropdown-link {
        display: block;
        height: 50px;
        line-height: 50px;
    }
    .person-img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin: 5px;
    }
</style>
