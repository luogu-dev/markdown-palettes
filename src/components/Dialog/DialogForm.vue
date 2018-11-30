<template>
    <div class="dialog-form">
        <div
            v-for="field in fields"
            :key="field.name"
            class="mp-dialog-field">
            <component
                :is="field.type || field.component"
                :request-field="field"
                v-model="data[field.name]"/>
        </div>
    </div>
</template>

<script>
import DialogComponents from './FormComponent/DialogFormComponentMap'

export default {
    name: 'dialog-form',
    components: DialogComponents,
    model: {
        prop: 'value',
        event: 'change'
    },
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
    data () {
        const initialData = {}
        this.fields.forEach((field) => {
            initialData[field.name] = field.default ? field.default : ''
        })
        return {
            selectId: 1,
            data: initialData
        }
    },
    watch: {
        data: {
            deep: true,
            handler (newData) {
                this.$emit('change', newData)
            }
        }
    },
    inject: ['t']
}
</script>

<style scoped>
    .mp-dialog-field {
        margin: 10px 8px;
        overflow:auto;
    }
</style>
