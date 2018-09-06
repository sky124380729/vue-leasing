<template>
    <el-table :data="tableList">
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
                <el-button @click="add(scope.row)">新增</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    props: {
        status: String
    },
    data() {
        return {
            tableList: [{id: '12-123-sda', name: 'zq', age: '1'}, {id: '23-451-fda', name: 'xwc', age: '3'}]
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
