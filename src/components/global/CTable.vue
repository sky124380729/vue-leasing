<template>
    <section>
        <div>
            <el-input placeholder="请输入名称" v-model="conditions.name" clearable size="small"></el-input>
            <el-button @click="getList" type="primary" size="small">搜索</el-button>
        </div>
        <el-table :data="tableList" :size="size" :border="border" :show-summary="showSummary" :summary-method="summaryMethod" :span-method="spanMethod" v-loading="loading">
            <slot></slot>
        </el-table>
        <el-pagination class="fr" :total="total" :current-page.sync="currentPage" :page-size="pageSize"
            @current-change="getList" @size-change="sizeChange" layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
    </section>
</template>

<script>
export default {
    name: 'cTable',
    props: {
        api: String,
        showSummary: Boolean,
        summaryMethod: Function,
        spanMethod: Function,
        border: Boolean,
        size: String
    },
    data() {
        return {
            conditions: {},
            total: 100,
            currentPage: 1,
            pageSize: 10,
            tableList: [],
            loading: false
        }
    },
    methods: {
        sizeChange(pageSize) {
            this.pageSize = pageSize
            this.currentPage = 1
            this.getList()
        },
        getList() {
            this.loading = true
            this.$http('POST', this.api, {
                pageSize: this.pageSize,
                page: this.currentPage,
                ...this.conditions
            }).then(res => {
                this.tableList = res.data.data
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        }
    },
    activated() {
        this.getList()
    }
}
</script>
