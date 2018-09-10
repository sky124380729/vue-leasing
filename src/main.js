// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
// import './styles/element-variables.scss' // 可更改主体的样式(勿删)
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css' // 字体ICON
import './styles/index.scss' // 全局 css
import filters from './filters' // 全局过滤器
import directives from './directives' // 全局指令
import utils from './utils' // 全局工具类
import { asyncMap } from '@/router'

// 全局组件注册
import CMoney from '@/components/global/CMoney'
import CTable from '@/components/global/CTable'
Vue.component(CMoney.name, CMoney)
Vue.component(CTable.name, CTable)

Vue.config.productionTip = false
Vue.use(directives)
Vue.use(Element)
Vue.use(utils)
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
router.addRoutes(asyncMap)
/* 路由配置 */
router.beforeEach((to, from, next) => {
    NProgress.start()
    // 如果要条状到登录页,清空session数据
    if (to.path === '/login') {
        sessionStorage.removeItem('userInfo')
        store.commit('DEL_ALL_NAVTAGS')
    }
    next()
})
router.afterEach(() => {
    NProgress.done()
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
