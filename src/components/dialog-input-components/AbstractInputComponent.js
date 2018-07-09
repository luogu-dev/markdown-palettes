import { mixin as getTextMixin } from '../i18n'

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
    computed: {
        title () { return this.t(this.request.title) }
    },
    watch: {
        value (newValue) {
            this.request.value = newValue
            this.$emit('change', this.request)
        }
    },
    mixins: [getTextMixin]
}
