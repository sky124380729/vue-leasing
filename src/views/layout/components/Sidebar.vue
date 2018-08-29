<template>
    <section class="sidebar">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu @open="handleOpen" :default-active="$route.path" @close="handleClose" :collapse="isCollapse"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
            <div v-for="item in menuList" :key="item.id">
                <!-- FIXME:目前第一级nodeInfo的url为空，所以给了个假的id -->
                <el-submenu :index="item.nodeInfo.url||item.nodeInfo.id" v-if="item.children.length">
                    <template slot="title">
                        <i :class="item.nodeInfo.icon"></i>
                        <span slot="title">{{item.nodeInfo.name}}</span>
                    </template>
                    <el-menu-item :index="subItem.nodeInfo.url" v-for="subItem in item.children" :key="subItem.nodeInfo.id">
                        <i :class="subItem.nodeInfo.icon"></i>
                        <span slot="title">{{subItem.nodeInfo.name}}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item :index="item.nodeInfo.url" v-else>
                    <i :class="item.nodeInfo.icon"></i>
                    <span slot="title">{{item.nodeInfo.name}}</span>
                </el-menu-item>
            </div>
        </el-menu>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false
        }
    },
    computed: {
        menuList() {
            return { 'code': 200, 'message': '服务器成功返回用户请求的数据', 'content': { 'id': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'pid': null, 'nodeInfo': { 'id': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'createTime': null, 'modifyTime': null, 'code': '0001', 'name': '系统资源树', 'pid': null, 'url': 'fa fa-adn', 'description': null, 'icon': '', 'resourceType': 1, 'status': 1 }, 'children': [{ 'id': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'nodeInfo': { 'id': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'createTime': 1531363772000, 'modifyTime': 1531363772000, 'code': '00010055', 'name': '贷后管理', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': null, 'description': null, 'icon': 'fa fa-bank', 'resourceType': 1, 'status': 1 }, 'children': [{ 'id': '90a12a8c-8203-42bc-9a7f-a73aab0f2d18', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'nodeInfo': { 'id': '90a12a8c-8203-42bc-9a7f-a73aab0f2d18', 'createTime': 1531448603000, 'modifyTime': 1531450492000, 'code': '000100550003', 'name': '逾期催收', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'url': '/loanManagement/rentCollection/REN_COL_BUSINESS', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [] }, { 'id': 'bce0a0b7-5fe9-410b-ada8-a3ff82ce7d9f', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'nodeInfo': { 'id': 'bce0a0b7-5fe9-410b-ada8-a3ff82ce7d9f', 'createTime': 1533868435000, 'modifyTime': 1533868435000, 'code': '000100550007', 'name': '呆账催收', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'url': '/loanManagement/bedDebtCollection', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [] }, { 'id': 'f8a1337a-8226-4fd8-9c50-a116e9e1a54f', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'nodeInfo': { 'id': 'f8a1337a-8226-4fd8-9c50-a116e9e1a54f', 'createTime': 1531712382000, 'modifyTime': 1531712382000, 'code': '000100550009', 'name': '催收管理', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'url': '/loanManagement/rentCollection/REN_COL_MANAGEMENT', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [] }, { 'id': '84dfc74f-b2f7-412a-8a7d-11c1db4f6aca', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'nodeInfo': { 'id': '84dfc74f-b2f7-412a-8a7d-11c1db4f6aca', 'createTime': 1533024712000, 'modifyTime': 1533027308000, 'code': '000100550014', 'name': '起诉申请', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'url': '/loanManagement/prosecute/LAWSUIT_BATCH_APPLY/list', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [] }, { 'id': 'e9370887-9162-49f3-8204-005bcbe8c574', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'nodeInfo': { 'id': 'e9370887-9162-49f3-8204-005bcbe8c574', 'createTime': 1531363795000, 'modifyTime': 1533189739000, 'code': '000100550020', 'name': '诉讼案件', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'url': '/loanManagement/lawsuit/list', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [] }, { 'id': 'b0ac7070-cba2-4c9e-a150-7c263ca576e1', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'nodeInfo': { 'id': 'b0ac7070-cba2-4c9e-a150-7c263ca576e1', 'createTime': 1532921872000, 'modifyTime': 1532921908000, 'code': '000100550022', 'name': '呆账转销申请', 'pid': '9293f878-9a0b-4e32-b50d-cadbdf8b6c97', 'url': '/loanManagement/badDebt/APPLY', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [] }] }, { 'id': '4569f862-a524-4727-a52d-3cffdc231616', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'nodeInfo': { 'id': '4569f862-a524-4727-a52d-3cffdc231616', 'createTime': 1531966986000, 'modifyTime': 1531966986000, 'code': '00010065', 'name': '回访管理', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': null, 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [{ 'id': '6bf108cf-e579-4015-a44d-3e202f4386e8', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'nodeInfo': { 'id': '6bf108cf-e579-4015-a44d-3e202f4386e8', 'createTime': 1531967011000, 'modifyTime': 1531986473000, 'code': '000100650002', 'name': '回访信息', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'url': '/returnVisit/reviewVisit', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [] }, { 'id': '9b693f26-053a-4abc-a72c-991b5c7ed64c', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'nodeInfo': { 'id': '9b693f26-053a-4abc-a72c-991b5c7ed64c', 'createTime': 1531986530000, 'modifyTime': 1531986530000, 'code': '000100650008', 'name': '回访协助', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'url': '/returnVisit/reviewVisitAssist', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1 }, 'children': [] }] }] } }.content.children
        }
    },
    created() {
        // console.log(this.menuList)
    },
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath)
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
