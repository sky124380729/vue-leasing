<template>
    <section>
        <el-input v-model="aaa"></el-input>
        <el-button @click="back">返回</el-button>
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
    }
}
</script>
