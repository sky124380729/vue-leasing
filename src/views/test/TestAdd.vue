<template>
    <section>
        <el-input v-model="aaa" size="small"></el-input>
        <el-button @click="back" size="small" type="success">返回</el-button>
    </section>
</template>

<script>
export default {
    props: {
        state: String
    },
    data() {
        return {
            aaa: null
        }
    },
    methods: {
        back() {
            this.$emit('update:state', 'TestList')
        }
    }
}
</script>
