// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import './styles/element-variables.scss' // element样式
import 'font-awesome/css/font-awesome.min.css' // 字体ICON
import './styles/index.scss' // 全局 css
import filters from './filters' // 全局过滤器
import utils from './utils' // 全局工具类
import { asyncMap } from '@/router'

Vue.use(Element)
Vue.use(utils)

Vue.config.productionTip = false

// 全局注册过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

router.addRoutes(asyncMap)

/* 路由配置 */
router.beforeEach((to, from, next) => {
    NProgress.start()
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
