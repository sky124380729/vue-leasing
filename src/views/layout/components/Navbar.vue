<template>
    <section class="navbar">
        <div class="menubar">
            <!-- <i class="fa" :class="`${$store.state.collapse?'fa-indent':'fa-outdent'}`" @click="changeCollapse"></i> -->
           <div class="fl">
                <i class="fa fa-th-list" :class="{'fa-rotate-90':$store.state.collapse}" @click="changeCollapse"></i>
                <!-- 面包屑导航 -->
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item v-for="item in breadList" :key="item.name">{{item.meta.title}}</el-breadcrumb-item>
                </el-breadcrumb>
           </div>

            <!-- 右侧菜单项 -->
            <div class="fr menu-right">

                <el-tooltip class="item fl" effect="dark" content="全屏" placement="bottom">
                    <i class="fa fa-arrows-alt" @click="fullScreen"></i>
                </el-tooltip>

                <el-dropdown>
                    <span class="el-dropdown-link">
                        <img class="person-img fl" src="../../../assets/timg.gif" alt="">
                        <i class="person-name fl">Pink丶缤</i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item @click.native="myMessage">我的消息</el-dropdown-item>
                        <el-dropdown-item>设置</el-dropdown-item>
                        <el-dropdown-item divided @click.native="logOut">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>

        </div>
        <nav-tags></nav-tags>
        <!-- 我的消息 -->
        <el-dialog :visible.sync="msgVisible">
            <el-table :data="msgList">
                <el-table-column label="消息" prop="msg"></el-table-column>
                <el-table-column>
                    <template slot-scope="scope">
                        <el-button type="primary" @click="goMsg(scope.row.url)">确认</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </section>
</template>

<script>
import NavTags from './NavTags'
import screenfull from 'screenfull'
export default {
    data() {
        return {
            msgVisible: false,
            msgList: [{
                url: '/component/index?id=12-123-sda&state=add',
                msg: '新增组件测试'
            }]
        }
    },
    computed: {
        breadList() {
            // 如果有重定向，则是由于没有子菜单
            return this.$route.matched.filter(route => !route.redirect)
        }
    },
    methods: {
        // 改变左侧菜单收缩
        changeCollapse() {
            this.$store.commit('SET_COLLAPSE', !this.$store.state.collapse)
        },
        // 我的消息
        myMessage() {
            this.msgVisible = true
        },
        // 跳转到我的消息
        goMsg(url) {
            this.$router.push(url)
            this.msgVisible = false
        },
        // 退出登录
        logOut() {
            this.$router.push({
                path: '/login'
            })
        },
        // 全屏
        fullScreen() {
            if (!screenfull.enabled) {
                this.$message({
                    message: 'you browser can not work',
                    type: 'warning'
                })
                return false
            }
            screenfull.toggle()
        }
    },
    components: {
        NavTags
    }
}
</script>

<style lang="scss" scoped>
.menubar {
  height: 50px;
  line-height: 50px;
  overflow: hidden;
  .fa {
    color: #363c42;
    cursor: pointer;
    transition: all 0.4s;
  }
  .fa-arrows-alt {
    line-height: 50px;
    font-size: 24px;
  }
  .menu-right {
    margin-right: 20px;
  }
  .person-img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 5px 10px;
  }
}
</style>
