/* 实例公共扩展函数 */

import service from '@/api'

export default {
    install(Vue, options) {
        // 请求配置
        Vue.prototype.$http = (method, url, params) => {
            return service({
                url: url,
                method: method,
                data: params || {}
            })
        }
    }
}
