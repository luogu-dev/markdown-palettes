<template>
    <div class="dialog-form">
        <div class="mp-dialog-field" v-for="field in fields" :key="field.name">
            <component :is="field.type || field.component" :request-field="field" v-model="data[field.name]"></component>
        </div>
    </div>
</template>

<script>
import DialogComponents from './DialogComponentMap'

export default {
    name: 'dialog-form',
    props: {
        fields: {
            type: Array,
            required: true
        },
        value: {
            type: Object,
            required: true
        }
    },
    model: {
        prop: 'value',
        event: 'change'
    },
    computed: {
        data: {
            get () {
                return this.value
            },
            set (value) {
                this.$emit('change', value)
            }
        }
    },
    methods: {
        close () {
            this.$emit('close')
        },
        finish () {
            this.$emit('finish', this.response)
        }
    },
    components: DialogComponents,
    inject: ['t']
}
</script>

<style scoped>
    .mp-dialog-field {
        margin: 10px 8px;
        overflow:auto;
    }
</style>
