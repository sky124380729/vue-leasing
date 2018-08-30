import axios from 'axios'

// 创建实例
const service = axios.create({
    baseURL: '/springboot-mybatis', // 基准地址
    timeout: 5000 // 超时时间
})

// 请求拦截器
service.interceptors.request.use(config => {
    const token = JSON.stringify(sessionStorage.getItem('authorization'))
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
        return Promise.reject(error)
    }
)

export default service
