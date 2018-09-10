<template>
    <section>
        <el-input v-model="aaa" size="small"></el-input>
        <el-button @click="back" size="small" type="success">返回</el-button>
    </section>
</template>

<script>
export default {
    props: {
        status: String
    },
    data() {
        return {
            aaa: null
        }
    },
    methods: {
        back() {
            this.$emit('update:status', 'list')
        }
    },
    created() {
        console.log('add')
    }
}
</script>
