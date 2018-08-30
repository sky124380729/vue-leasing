// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'// progress bar style
import './styles/element-variables.scss' // element样式
import './styles/index.scss' // 全局 css

Vue.use(Element)

Vue.config.productionTip = false

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
    components: { App },
    template: '<App/>'
})
