<script>
export default {
    props: {
        requestField: {
            type: Object
        },
        param: {
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            request: this.requestField,
            value: this.requestField.default ? this.requestField.default : ''
        }
    },
    watch: {
        value (newValue) {
            this.request.value = newValue
            this.$emit('change', this.request)
        }
    }
}
</script>