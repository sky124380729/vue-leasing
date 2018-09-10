import axios from 'axios'
import Vue from 'vue'

// 创建实例
const service = axios.create({
    baseURL: '/leasing-api', // 基准地址
    timeout: 5000 // 超时时间
})

// 请求拦截器
service.interceptors.request.use(config => {
    // const token = JSON.stringify(sessionStorage.getItem('authorization'))
    const token = '748271b8-63b7-43e3-8042-ddb5089471a2_7000fb4f3fc14567b64583c5489145c9'
    // 如果当前有token，则请求头加上token
    if (token) {
        config.headers['authorization'] = token
    }
    return config
}, error => {
    Promise.reject(error)
})

// 返回拦截器
service.interceptors.response.use(
    response => {
        return Promise.resolve(response)
    },
    error => {
        console.log(error.response.status)
        Vue.prototype.$message({
            message: '服务器错误',
            type: 'error'
        })
        return Promise.reject(error)
    }
)

export default service
