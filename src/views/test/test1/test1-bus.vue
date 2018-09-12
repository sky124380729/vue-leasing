<template>
    <keep-alive include="TestList">
        <component :is="status" :state.sync="state"></component>
    </keep-alive>
</template>

<script>
import { bus } from '@/mixins'
import TestList from './test1-list'
import TestAdd from './test1-add'
export default {
    name: 'Test1Bus',
    mixins: [bus],
    data() {
        return {
            state: 'TestList'
        }
    },
    components: {
        TestList,
        TestAdd
    }
}
</script>
