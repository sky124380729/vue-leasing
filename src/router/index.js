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
 * 如果子菜单没有内容，则使用redirect跳转到children的index路由
 * title:标题
 * icon:图标
 * name:只要有name值就缓存页面(此处的name值要和组件中的name值保持一致)
 * menu:是否是菜单项
 * 注意:index只有在一级菜单没有子菜单的时候使用
*/
export const asyncMap = [{
    path: '/platform',
    component: Layout,
    redirect: '/platform/index',
    meta: { title: '中央控制台', icon: 'fa fa-windows', menu: true },
    children: [{
        path: 'index',
        name: 'platform',
        component: () => import('@/views/platform'),
        meta: {title: '中央控制台'}
    }]
}, {
    path: '/component',
    component: Layout,
    meta: { title: '组件测试', icon: 'fa fa-windows', menu: true },
    children: [{
        path: 'test',
        name: 'Test1Bus',
        component: () => import('@/views/test/test1/test1-bus'),
        meta: {title: '公用组件1', icon: 'fa fa-windows', menu: true}
    }, {
        path: 'test2',
        name: 'Test2Bus',
        component: () => import('@/views/test/test2/test2-bus'),
        meta: { title: '公用组件2', icon: 'fa fa-windows', menu: true }
    }]
}, {
    path: '/upload',
    redirect: '/upload/index',
    component: Layout,
    meta: { title: '图片上传测试', icon: 'fa fa-windows', menu: true },
    children: [{
        path: 'index',
        name: 'upload',
        component: () => import('@/components/c-upload'),
        meta: {title: '图片上传测试'}
    }]
}, {
    path: '/system',
    name: 'system',
    component: Layout,
    meta: {title: '系统资源管理', icon: 'fa fa-windows', menu: true},
    children: [{
        path: 'permission',
        component: () => import('@/components/permission'),
        name: 'permission',
        meta: { title: '系统权限管理', icon: 'fa fa-windows', menu: true }
    }]
}]
