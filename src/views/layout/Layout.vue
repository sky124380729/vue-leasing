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

                <!-- 使用标记缓存方式 -->
                <!-- <keep-alive :include="$store.state.cachedViews">
                    <router-view :key="$route.fullPath" class="main-box"></router-view>
                </keep-alive> -->

                <!-- 使用全缓存，设置最大缓存数 -->
                <!-- <keep-alive :max="max">
                    <router-view :key="$route.path" class="main-box"></router-view>
                </keep-alive> -->

                <!-- 动态组件缓存 -->
                <keep-alive :include="$store.state.cachedViews">
                    <router-view :key="$route.path" class="main-box"></router-view>
                </keep-alive>
            </transition>
        </div>
    </section>
</template>

<script>
import { CACHE_LIMIT } from '@/constant'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
export default {
    data() {
        return {
            max: CACHE_LIMIT
        }
    },
    components: {
        Sidebar,
        Navbar
    }
}
</script>
