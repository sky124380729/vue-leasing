<template>
    <section class="sidebar">
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group> -->
        <el-menu @open="handleOpen" :default-active="$route.path" @close="handleClose" :collapse="isCollapse"  background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <div v-for="item in menuList" :key="item.id">
                <!-- FIXME:目前第一级nodeInfo的url为空，所以给了个假的id -->
                <el-submenu :index="item.nodeInfo.url||item.nodeInfo.id" v-if="item.children.length">
                    <template slot="title">
                        <i class="el-icon-success"></i>
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
            return {
                'code': 200,
                'message': '服务器成功返回用户请求的数据',
                'content': {
                    'id': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96',
                    'pid': null,
                    'nodeInfo': {'id': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'createTime': null, 'modifyTime': null, 'code': '0001', 'name': '系统资源树', 'pid': null, 'url': 'fa fa-adn', 'description': null, 'icon': '', 'resourceType': 1, 'status': 1},
                    'children': [
                        {
                            'id': '6eebb264-bac4-11e7-95aa-2a5b3aa06a96',
                            'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96',
                            'nodeInfo': {'id': '6eebb264-bac4-11e7-95aa-2a5b3aa06a96', 'createTime': null, 'modifyTime': null, 'code': '00010001', 'name': '中央控制台', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': '/admin-platform', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1},
                            'children': []
                        },
                        {
                            'id': 'acc760e0-1315-4cbd-9dae-88db5a96a1c5',
                            'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96',
                            'nodeInfo': {'id': 'acc760e0-1315-4cbd-9dae-88db5a96a1c5', 'createTime': null, 'modifyTime': null, 'code': '00010009', 'name': '供应商管理', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': null, 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1},
                            'children': [{
                                'id': '5c1460b9-6978-49e9-9c47-10d0336f34c6',
                                'pid': 'acc760e0-1315-4cbd-9dae-88db5a96a1c5',
                                'nodeInfo': {'id': '5c1460b9-6978-49e9-9c47-10d0336f34c6', 'createTime': 1530673090000, 'modifyTime': 1530673117000, 'code': '000100090028', 'name': '供应商评级', 'pid': 'acc760e0-1315-4cbd-9dae-88db5a96a1c5', 'url': '/supplierManagement/rate', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1},
                                'children': []}
                            ]},
                        {
                            'id': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a',
                            'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96',
                            'nodeInfo': {'id': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a', 'createTime': null, 'modifyTime': null, 'code': '00010015', 'name': '访厂管理', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': null, 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1},
                            'children': [
                                {
                                    'id': '75a1015e-bb4e-44ec-a746-d0229073c190', 'pid': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a', 'nodeInfo': {'id': '75a1015e-bb4e-44ec-a746-d0229073c190', 'createTime': null, 'modifyTime': null, 'code': '000100150010', 'name': '访厂管理', 'pid': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a', 'url': '/visitFactory/manageVisitFactory/examineManageVisitFactory', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}, {'id': '9adee60a-f4cd-4258-a79c-2ec0917e537d',
                                    'pid': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a',
                                    'nodeInfo': {'id': '9adee60a-f4cd-4258-a79c-2ec0917e537d', 'createTime': null, 'modifyTime': null, 'code': '000100150030', 'name': '指派人员', 'pid': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a', 'url': '/visitFactory/personnelAssignment/personnelAssignment', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 0, 'status': 1},
                                    'children': []
                                }, {
                                    'id': '6314d935-a9db-4492-bdd3-88f1ff4cebf3',
                                    'pid': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a',
                                    'nodeInfo': {'id': '6314d935-a9db-4492-bdd3-88f1ff4cebf3', 'createTime': null, 'modifyTime': null, 'code': '000100150040', 'name': '确认报告', 'pid': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a', 'url': '/visitFactory/reportConfirmation/reportConfirmation', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 0, 'status': 1},
                                    'children': []
                                }, {
                                    'id': '342f5c65-78a2-4b63-b11c-1921611c95e5',
                                    'pid': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a',
                                    'nodeInfo': {'id': '342f5c65-78a2-4b63-b11c-1921611c95e5', 'createTime': null, 'modifyTime': null, 'code': '000100150050', 'name': '访厂审批', 'pid': '3f78c776-b4a2-4fb7-8a99-66c4d15c1b3a', 'url': '/visitFactory/visitFactoryExamine', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1},
                                    'children': []
                                }]}, {
                            'id': '5a684912-05b7-4055-985a-11afeea85c1d',
                            'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96',
                            'nodeInfo': {'id': '5a684912-05b7-4055-985a-11afeea85c1d', 'createTime': null, 'modifyTime': null, 'code': '00010016', 'name': '审查管理', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': null, 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1},
                            'children': [
                                {
                                    'id': '628778e5-16f3-4c39-aa1d-6288f873c867',
                                    'pid': '5a684912-05b7-4055-985a-11afeea85c1d',
                                    'nodeInfo': {'id': '628778e5-16f3-4c39-aa1d-6288f873c867', 'createTime': null, 'modifyTime': null, 'code': '000100160010', 'name': '评审管理', 'pid': '5a684912-05b7-4055-985a-11afeea85c1d', 'url': '/auditManagement/scientificReview/examineScientificReview', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 0, 'status': 1},
                                    'children': []
                                },
                                {
                                    'id': '1f0a749a-b889-452a-b80b-cbb3abecc36d',
                                    'pid': '5a684912-05b7-4055-985a-11afeea85c1d',
                                    'nodeInfo': {'id': '1f0a749a-b889-452a-b80b-cbb3abecc36d', 'createTime': null, 'modifyTime': null, 'code': '000100160020', 'name': '初级评审', 'pid': '5a684912-05b7-4055-985a-11afeea85c1d', 'url': '/auditManagement/primaryReview/primaryReviewList', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 0, 'status': 1},
                                    'children': []
                                },
                                {
                                    'id': 'f62f9720-41b3-465a-adc1-64a5831521ed',
                                    'pid': '5a684912-05b7-4055-985a-11afeea85c1d',
                                    'nodeInfo': {'id': 'f62f9720-41b3-465a-adc1-64a5831521ed', 'createTime': null, 'modifyTime': null, 'code': '000100160030', 'name': '一级评审', 'pid': '5a684912-05b7-4055-985a-11afeea85c1d', 'url': '/auditManagement/firstReview/firstReview', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 0, 'status': 1},
                                    'children': []
                                },
                                {
                                    'id': 'd3c1aa97-bc9c-4b46-817d-2c34790df51d',
                                    'pid': '5a684912-05b7-4055-985a-11afeea85c1d',
                                    'nodeInfo': {'id': 'd3c1aa97-bc9c-4b46-817d-2c34790df51d', 'createTime': null, 'modifyTime': null, 'code': '000100160040', 'name': '二级评审', 'pid': '5a684912-05b7-4055-985a-11afeea85c1d', 'url': '/auditManagement/secondReview/secondReview', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 0, 'status': 1},
                                    'children': []
                                },
                                {
                                    'id': '1eca4094-22c0-4cb2-925e-5bce60042ebe',
                                    'pid': '5a684912-05b7-4055-985a-11afeea85c1d',
                                    'nodeInfo': {'id': '1eca4094-22c0-4cb2-925e-5bce60042ebe', 'createTime': null, 'modifyTime': null, 'code': '000100160060', 'name': '额度管理', 'pid': '5a684912-05b7-4055-985a-11afeea85c1d', 'url': '/auditManagement/amountManagement/amountManagementList', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 0, 'status': 1},
                                    'children': []
                                },
                                {
                                    'id': '674740d4-d294-4017-b6af-d23db86f911d',
                                    'pid': '5a684912-05b7-4055-985a-11afeea85c1d',
                                    'nodeInfo': {'id': '674740d4-d294-4017-b6af-d23db86f911d', 'createTime': null, 'modifyTime': null, 'code': '000100160070', 'name': '关联关系', 'pid': '5a684912-05b7-4055-985a-11afeea85c1d', 'url': '/auditManagement/association/examineAssociation', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 0, 'status': 1},
                                    'children': []
                                }]
                        }, {
                            'id': '15c58190-ab7d-4eb6-8a79-b0e35cd0fd89',
                            'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96',
                            'nodeInfo': {'id': '15c58190-ab7d-4eb6-8a79-b0e35cd0fd89', 'createTime': null, 'modifyTime': null, 'code': '00010018', 'name': '车辆信息管理', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': null, 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1},
                            'children': [{'id': 'e7e972bf-1d5d-409b-a985-239dd8816e28', 'pid': '15c58190-ab7d-4eb6-8a79-b0e35cd0fd89', 'nodeInfo': {'id': 'e7e972bf-1d5d-409b-a985-239dd8816e28', 'createTime': null, 'modifyTime': null, 'code': '000100180001', 'name': '司机信息管理', 'pid': '15c58190-ab7d-4eb6-8a79-b0e35cd0fd89', 'url': '/vehicle/drivers', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}, {'id': 'bc153dde-8f4b-4918-9c36-bc5db39d2c2d', 'pid': '15c58190-ab7d-4eb6-8a79-b0e35cd0fd89', 'nodeInfo': {'id': 'bc153dde-8f4b-4918-9c36-bc5db39d2c2d', 'createTime': null, 'modifyTime': null, 'code': '000100180001', 'name': '车辆信息管理', 'pid': '15c58190-ab7d-4eb6-8a79-b0e35cd0fd89', 'url': '/vehicle/vehicles', 'description': '1', 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}, {'id': 'b2a11868-4bc7-48fa-80a9-07f93cd81db8', 'pid': '15c58190-ab7d-4eb6-8a79-b0e35cd0fd89', 'nodeInfo': {'id': 'b2a11868-4bc7-48fa-80a9-07f93cd81db8', 'createTime': null, 'modifyTime': null, 'code': '000100180001', 'name': '出勤信息管理', 'pid': '15c58190-ab7d-4eb6-8a79-b0e35cd0fd89', 'url': '/vehicle/attendances', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}]}, {'id': '4569f862-a524-4727-a52d-3cffdc231616', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'nodeInfo': {'id': '4569f862-a524-4727-a52d-3cffdc231616', 'createTime': 1531966986000, 'modifyTime': 1531966986000, 'code': '00010065', 'name': '回访管理', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': null, 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': [{'id': '6bf108cf-e579-4015-a44d-3e202f4386e8', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'nodeInfo': {'id': '6bf108cf-e579-4015-a44d-3e202f4386e8', 'createTime': 1531967011000, 'modifyTime': 1531986473000, 'code': '000100650002', 'name': '回访信息', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'url': '/returnVisit/reviewVisit', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}, {'id': '4394559f-bc37-432d-9c89-679406a5dd72', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'nodeInfo': {'id': '4394559f-bc37-432d-9c89-679406a5dd72', 'createTime': 1531986513000, 'modifyTime': 1532488950000, 'code': '000100650004', 'name': '覆审报告', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'url': '/returnVisit/reviewVisitReport/REPORT_APPLY', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}, {'id': 'db28c243-77b8-4cf3-9c1f-54880a6ecc5c', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'nodeInfo': {'id': 'db28c243-77b8-4cf3-9c1f-54880a6ecc5c', 'createTime': 1532488981000, 'modifyTime': 1532488981000, 'code': '000100650006', 'name': '覆审审批', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'url': '/returnVisit/reviewVisitReport/REPORT_APPROVAL', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}, {'id': 'c1918303-266e-49d0-ac51-845aa84b1850', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'nodeInfo': {'id': 'c1918303-266e-49d0-ac51-845aa84b1850', 'createTime': 1532489007000, 'modifyTime': 1532489007000, 'code': '000100650010', 'name': '覆审管理', 'pid': '4569f862-a524-4727-a52d-3cffdc231616', 'url': '/returnVisit/reviewVisitReport/REPORT_MANAGE', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}]}, {'id': '4d4fe57d-cdb1-4c5e-a833-e5c7e7e214f4', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'nodeInfo': {'id': '4d4fe57d-cdb1-4c5e-a833-e5c7e7e214f4', 'createTime': null, 'modifyTime': null, 'code': '00010080', 'name': '系统信息管理', 'pid': '782d8ce0-b879-11e7-95aa-2a5b3aa06a96', 'url': null, 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': [{'id': '95c716f7-6fe8-4157-8413-469310bacdf1', 'pid': '4d4fe57d-cdb1-4c5e-a833-e5c7e7e214f4', 'nodeInfo': {'id': '95c716f7-6fe8-4157-8413-469310bacdf1', 'createTime': null, 'modifyTime': null, 'code': '000100800004', 'name': '系统日志管理', 'pid': '4d4fe57d-cdb1-4c5e-a833-e5c7e7e214f4', 'url': '/system/logs', 'description': null, 'icon': 'fa fa-adn', 'resourceType': 1, 'status': 1}, 'children': []}]}]}}.content.children
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
