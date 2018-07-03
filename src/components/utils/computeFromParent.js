export default name => {
    return { [name]: {
        get() {
            return this.$parent[name]
        },
        set(val) {
            this.$parent[name] = val
        }
    }}
}
