<template>
    <section class="app-wrapper">
        <!-- 左侧导航 -->
        <sidebar></sidebar>
        <!-- 右侧区域 -->
        <div class="main-wrapper">
            <!-- 顶部导航 -->
            <navbar></navbar>
            <!-- 主要内容区域 -->
            <main></main>
        </div>
    </section>
</template>

<script>
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Main from './components/Main'
export default {
    components: {
        Sidebar,
        Navbar,
        Main
    }
}
</script>
