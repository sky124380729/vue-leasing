<template>
    <c-table api="/quotations/pg">
        <el-table-column label="ID" prop="id"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="年龄" prop="age"></el-table-column>
        <el-table-column label="操作" fixed="right" class-name="operate">
            <template slot-scope="scope">
                <el-button @click="add(scope.row)" size="mini" type="primary">新增</el-button>
                <el-button @click="printIt(scope.row)" size="mini" type="warning">打印</el-button>
                <el-button @click="deleteIt(scope.row)" size="mini" type="danger">删除</el-button>
            </template>
        </el-table-column>
    </c-table>
</template>

<script>
import getLodop from '@/libs/Lodop'
export default {
    name: 'TestList',
    props: {
        state: String
    },
    data() {
        return {
            tableList: []
        }
    },
    methods: {
        add(row) {
            this.$router.push({
                query: {id: row.id}
            })
            this.$emit('update:state', 'TestAdd')
        },
        deleteIt() {
            this.$confirm('确定要删除吗?', '提示', {
                confirmButtonText: '确认',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

            }).catch(() => {})
        },
        printIt() {
            let LODOP = getLodop()
            LODOP.PRINT_INIT()
            LODOP.SET_PRINT_PAGESIZE(0, 0, 0, 'A4')
            LODOP.PREVIEW()
        }
    }
}
</script>
