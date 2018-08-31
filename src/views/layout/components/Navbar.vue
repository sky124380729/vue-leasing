<template>
    <section class="navbar">
        <div class="menubar">
            <i class="fa" :class="`${$store.state.collapse?'fa-indent':'fa-outdent'}`" @click="changeCollapse"></i>
            1111111111
        </div>
        <nav-tags></nav-tags>
    </section>
</template>

<script>
import NavTags from './NavTags'
export default {
    data() {
        return {}
    },
    methods: {
        changeCollapse() {
            this.$store.commit('SET_COLLAPSE', !this.$store.state.collapse)
        }
    },
    components: {
        NavTags
    }
}
</script>

<style lang="scss" scoped>
    .menubar {
        height: 50px;
        line-height: 50px;
    }
    .fa-indent,.fa-outdent {
        position: relative;
        top: 7px;
        font-size: 32px;
        color: #363c42;
        cursor: pointer;
    }
</style>
