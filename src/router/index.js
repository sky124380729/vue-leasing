import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Login from '@/views/login/Login'
import NotFound from '@/components/404'

Vue.use(Router)

/* 静态路由（初始化的时候即注册进去） */
const constantMap = [
    {
        path: '',
        name: 'platform',
        component: Layout
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/404',
        component: NotFound
    }, {
        path: '*',
        redirect: '/404'
    }
]

export default new Router({
    // 路由切换的时候滚动到头部
    scrollBehavior: () => ({ y: 0 }),
    routes: constantMap
})

/**
 * 异步路由（经过后台权限过滤之后显示的路由，从后台取过滤后的数据再注册到页面中）
 * title:标题
 * icon:图标
 * cache:是否缓存(默认为true)
*/
export const asyncMap = [{
    path: '/test',
    name: 'test',
    component: () => import('../components/test'),
    meta: { title: '测试', icon: 'fa fa-adn', cache: false },
    children: [{
        path: 'b',
        component: () => import('../components/test-child'),
        name: 'test-child'
    }]
}]
