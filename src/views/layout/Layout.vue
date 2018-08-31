<template>
    <section class="app-wrapper" :class="{shrink:$store.state.collapse}">
        <!-- 左侧导航 -->
        <sidebar class="sidebar-container"></sidebar>
        <!-- 右侧区域 -->
        <div class="main-wrapper">
            <!-- 顶部导航 -->
            <navbar></navbar>
            <!-- 主要内容区域 -->
            <transition name="el-fade-in-linear" mode="out-in">
                <keep-alive :include="$store.state.cachedViews">
                    <router-view :key="$route.fullPath" class="main-box"></router-view>
                </keep-alive>
            </transition>
        </div>
    </section>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
export default {
    components: {
        Sidebar,
        Navbar
    }
}
</script>
