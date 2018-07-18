<template>
    <div class="dialog-form">
        <div class="mp-dialog-field" v-for="field in fields" :key="field.name">
            <component :is="field.type || field.component" :request-field="field" v-model="data[field.name]"></component>
        </div>
    </div>
</template>

<script>
import DialogComponents from './FormComponent/DialogFormComponentMap'

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
            callback (newData) {
                this.$emit('change', newData)
            }
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
