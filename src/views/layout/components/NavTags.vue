<template>
    <section class="navTags">
        <el-tag v-for="item in navTags" :key="item.title" closable :class="{isActive:$route.path === item.path}">
            <router-link :to="item.path">{{item.title}}</router-link>
        </el-tag>
    </section>
</template>

<script>
export default {
    data() {
        return {
            // navTags: [
            //     {title: '新增案件', path: '/test/a'},
            //     {title: '呆账入账', path: '/test/b'}
            // ]
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
        addTag() {
            this.$store.commit('ADD_NAVTAGS', {
                title: this.$route.meta.title,
                path: this.$route.path
            })
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
            background-color: rgba(64, 158, 255,0.3);
        }
    }
}
</style>
