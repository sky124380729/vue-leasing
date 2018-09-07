<template>
    <section>
        <div class="top">
            <el-input placeholder="请输入姓名"></el-input>
            <el-input placeholder="请输入年龄"></el-input>
        </div>

        <el-pagination :total="total" :current-page.sync="currentPage" :page-size="pageSize"
            @current-change="currentChange" @size-change="sizeChange" layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
    </section>
</template>

<script>
export default {
    props: {
        path: String
    },
    data() {
        return {
            total: 100,
            currentPage: 1,
            pageSize: 10
        }
    },
    created() {
        console.log('created')
    },
    activated() {
        console.log('activated')
    },
    methods: {
        currentChange() {},
        sizeChange() {}
    }
}
</script>
