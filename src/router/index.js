import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Login from '@/views/login/Login'
import NotFound from '@/components/404'

Vue.use(Router)

/* 静态路由（初始化的时候即注册进去） */
const constantMap = [
    {
        path: '/',
        redirect: '/platform',
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
    path: '/platform',
    name: 'platform',
    component: Layout,
    meta: { title: '中央控制台', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test',
    name: 'test',
    component: Layout,
    meta: { title: '测试1', icon: 'fa fa-windows', cache: true, menu: true },
    children: [{
        path: 'a',
        component: () => import('@/components/test-child'),
        name: 'test-child1',
        meta: { title: '测试-子页面1', icon: 'fa fa-windows', cache: true, menu: true }
    }, {
        path: 'b',
        component: () => import('@/components/test-child2'),
        name: 'test-child2',
        meta: { title: '测试-子页面2', icon: 'fa fa-windows', cache: true, menu: true }
    }, {
        path: 'c',
        component: () => import('@/components/test-child2'),
        name: 'test-child3',
        meta: { title: '测试-子页面3', icon: 'fa fa-windows', cache: true, menu: false }
    }]
}, {
    path: '/test2',
    name: 'test2',
    component: Layout,
    meta: { title: '测试2', icon: 'fa fa-windows', cache: true, menu: true },
    children: [{
        path: 'a',
        component: () => import('@/components/test-child'),
        name: 'test-child4',
        meta: { title: '测试-子页面4', icon: 'fa fa-windows', cache: true, menu: true }
    }, {
        path: 'b',
        component: () => import('@/components/test-child2'),
        name: 'test-child5',
        meta: { title: '测试-子页面5', icon: 'fa fa-windows', cache: true, menu: false }
    }, {
        path: 'c',
        component: () => import('@/components/test-child2'),
        name: 'test-child6',
        meta: { title: '测试-子页面6', icon: 'fa fa-windows', cache: true, menu: true }
    }]
}, {
    path: '/test3',
    name: 'test3',
    component: Layout,
    meta: { title: '测试3', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/upload',
    component: Layout,
    redirect: '/upload/index',
    meta: { title: '图片上传测试', icon: 'fa fa-windows', cache: true, menu: true },
    children: [{
        path: 'index',
        name: 'upload',
        component: () => import('@/components/c-upload'),
        meta: {title: '图片上传测试', icon: 'fa fa-windows'}
    }]
}, {
    path: '/test4',
    name: 'test4',
    component: Layout,
    meta: { title: '测试4', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test5',
    name: 'test5',
    component: Layout,
    meta: { title: '测试5', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test6',
    name: 'test6',
    component: Layout,
    meta: { title: '测试6', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test7',
    name: 'test7',
    component: Layout,
    meta: { title: '测试7', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test8',
    name: 'test8',
    component: Layout,
    meta: { title: '测试8', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test9',
    name: 'test9',
    component: Layout,
    meta: { title: '测试9', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test10',
    name: 'test10',
    component: Layout,
    meta: { title: '测试10', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test11',
    name: 'test11',
    component: Layout,
    meta: { title: '测试11', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test12',
    name: 'test12',
    component: Layout,
    meta: { title: '测试12', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test13',
    name: 'test13',
    component: Layout,
    meta: { title: '测试13', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test14',
    name: 'test14',
    component: Layout,
    meta: { title: '测试14', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test15',
    name: 'test15',
    component: Layout,
    meta: { title: '测试15', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test16',
    name: 'test16',
    component: Layout,
    meta: { title: '测试16', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test17',
    name: 'test17',
    component: Layout,
    meta: { title: '测试17', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test18',
    name: 'test18',
    component: Layout,
    meta: { title: '测试18', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test19',
    name: 'test19',
    component: Layout,
    meta: { title: '测试19', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/test20',
    name: 'test20',
    component: Layout,
    meta: { title: '测试20', icon: 'fa fa-windows', cache: true, menu: true }
}, {
    path: '/system',
    name: 'system',
    component: Layout,
    meta: {title: '系统资源管理', icon: 'fa fa-windows', cache: false, menu: true},
    children: [{
        path: 'permission',
        component: () => import('@/components/permission'),
        name: 'permission',
        meta: { title: '系统权限管理', icon: 'fa fa-windows', cache: true, menu: true }
    }]
}]
