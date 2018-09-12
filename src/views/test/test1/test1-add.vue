<template>
    <section>
        <el-input v-model="aaa" size="small"></el-input>
        <el-button @click="back" size="small" type="success">返回</el-button>
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="margin-top:20px" :before-leave="beforeLeave">
            <el-tab-pane label="用户管理" name="first" lazy>用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second" lazy>配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third" lazy>角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth" lazy>定时任务补偿</el-tab-pane>
        </el-tabs>
    </section>
</template>

<script>
export default {
    props: {
        state: String
    },
    data() {
        return {
            aaa: null,
            activeName: 'first'
        }
    },
    methods: {
        back() {
            this.$router.replace({query: {}})
            this.$emit('update:state', 'TestList')
        },
        beforeLeave(activeName, oldActiveName) {
            console.log(activeName, oldActiveName)
        },
        handleClick(tab, event) {
            console.log(tab, event)
        }
    }
}
</script>
