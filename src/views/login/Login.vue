<template>
    <section class="login">
        <el-form label-position="rigth" label-width="100px">
            <el-form-item label="用户名：">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="密码：">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-button class="login-btn" type="primary" @click="login">登录</el-button>
            </el-form-item>
        </el-form>
    </section>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        login() {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    width: 600px;
    padding: 40px 10px;
    margin: 50px auto;
    background-color: yellowgreen;
}
</style>
