import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import NotFound from '@/components/404'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '',
            name: 'platform',
            component: Layout
        },
        {
            path: '/404',
            component: NotFound
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
