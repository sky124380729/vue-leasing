<template>
    <c-table api="/quotations/pg">
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="操作" fixed="right" class-name="operate">
            <template slot-scope="scope">
                <el-button @click="add(scope.row)" size="mini">新增</el-button>
            </template>
        </el-table-column>
    </c-table>
</template>

<script>
export default {
    name: 'list',
    props: {
        status: String
    },
    data() {
        return {
            tableList: []
        }
    },
    methods: {
        add(row) {
            this.$router.replace({
                query: {id: row.id}
            })
            this.$emit('update:status', 'add')
        }
    }
}
</script>
