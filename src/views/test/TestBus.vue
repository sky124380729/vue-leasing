<template>
    <keep-alive include="TestList">
        <component :is="status" :state.sync="state"></component>
    </keep-alive>
</template>

<script>
import { bus } from '@/mixins'
import TestList from './TestList'
import TestAdd from './TestAdd'
export default {
    name: 'TestBus',
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
