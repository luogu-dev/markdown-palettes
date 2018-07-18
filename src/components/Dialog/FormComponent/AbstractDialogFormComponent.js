export default {
    props: {
        requestField: {
            type: Object,
            required: true
        },
        fieldValue: {}
    },
    model: {
        prop: 'fieldValue',
        event: 'change'
    },
    computed: {
        title () { return this.t(this.requestField.title) },
        param () { return this.requestField.param },
        value: {
            get () {
                return this.fieldValue
            },
            set (val) {
                this.$emit('change', val)
            }
        }
    },
    inject: ['t']
}
