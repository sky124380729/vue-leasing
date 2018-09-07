<template>
    <keep-alive include="list">
        <component :is="state" :status.sync="status"></component>
    </keep-alive>
</template>

<script>
import List from './list'
import Add from './add'
export default {
    name: 'bus',
    data() {
        return {
            status: null
        }
    },
    computed: {
        state() {
            return this.$route.query.state || this.status || 'list'
        }
    },
    components: {
        List,
        Add
    }
}
</script>
