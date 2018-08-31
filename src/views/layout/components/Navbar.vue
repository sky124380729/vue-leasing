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
