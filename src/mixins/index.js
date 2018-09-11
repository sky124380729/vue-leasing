export const bus = {
    computed: {
        status() {
            return this.$route.query.status || this.state
        }
    }
}
