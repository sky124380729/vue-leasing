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
 * menu:是否是菜单项
*/
export const asyncMap = [{
    path: '/test',
    name: 'test',
    component: Layout,
    meta: { title: '测试1', icon: 'el-icon-success', cache: false, menu: true },
    children: [{
        path: 'a',
        component: () => import('@/components/test-child'),
        name: 'test-child',
        meta: { title: '测试-子页面1', icon: 'el-icon-success', cache: false, menu: true }
    }, {
        path: 'b',
        component: () => import('@/components/test-child2'),
        name: 'test-child2',
        meta: { title: '测试-子页面2', icon: 'el-icon-success', cache: false, menu: true }
    }, {
        path: 'c',
        component: () => import('@/components/test-child2'),
        name: 'test-child2',
        meta: { title: '测试-子页面3', icon: 'el-icon-success', cache: false, menu: false }
    }]
}, {
    path: '/test2',
    name: 'test2',
    component: Layout,
    meta: { title: '测试2', icon: 'el-icon-success', cache: false, menu: true },
    children: [{
        path: 'a',
        component: () => import('@/components/test-child'),
        name: 'test-child',
        meta: { title: '测试-子页面1', icon: 'el-icon-success', cache: false, menu: true }
    }, {
        path: 'b',
        component: () => import('@/components/test-child2'),
        name: 'test-child2',
        meta: { title: '测试-子页面2', icon: 'el-icon-success', cache: false, menu: false }
    }, {
        path: 'c',
        component: () => import('@/components/test-child2'),
        name: 'test-child2',
        meta: { title: '测试-子页面3', icon: 'el-icon-success', cache: false, menu: true }
    }]
}, {
    path: '/test3',
    name: 'test3',
    component: Layout,
    meta: { title: '测试3', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test4',
    name: 'test4',
    component: Layout,
    meta: { title: '测试4', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test5',
    name: 'test5',
    component: Layout,
    meta: { title: '测试5', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test6',
    name: 'test6',
    component: Layout,
    meta: { title: '测试6', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test7',
    name: 'test7',
    component: Layout,
    meta: { title: '测试7', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test8',
    name: 'test8',
    component: Layout,
    meta: { title: '测试8', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test9',
    name: 'test9',
    component: Layout,
    meta: { title: '测试9', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test10',
    name: 'test10',
    component: Layout,
    meta: { title: '测试10', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test11',
    name: 'test11',
    component: Layout,
    meta: { title: '测试11', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test12',
    name: 'test12',
    component: Layout,
    meta: { title: '测试12', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test13',
    name: 'test13',
    component: Layout,
    meta: { title: '测试13', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test14',
    name: 'test14',
    component: Layout,
    meta: { title: '测试14', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test15',
    name: 'test15',
    component: Layout,
    meta: { title: '测试15', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test16',
    name: 'test16',
    component: Layout,
    meta: { title: '测试16', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test17',
    name: 'test17',
    component: Layout,
    meta: { title: '测试17', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test18',
    name: 'test18',
    component: Layout,
    meta: { title: '测试18', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test19',
    name: 'test19',
    component: Layout,
    meta: { title: '测试19', icon: 'el-icon-success', cache: false, menu: true }
}, {
    path: '/test20',
    name: 'test20',
    component: Layout,
    meta: { title: '测试20', icon: 'el-icon-success', cache: false, menu: true }
}]
