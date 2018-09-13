<template>
    <el-tree
        :data="data"
        show-checkbox
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps">
    </el-tree>
</template>

<script>
import { asyncMap } from '@/router'
export default {
    name: 'permission',
    data() {
        return {
            data: asyncMap,
            defaultProps: {
                children: 'children',
                label(data) {
                    return data.meta.title
                }
            }
        }
    }
}
</script>
