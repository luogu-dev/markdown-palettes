<template>
    <div class="dialog-tab">
        <div class="dialog-switch-container">
            <ul>
                <li
                    v-for="(category, index) in this.fields"
                    :class="{
                        'dialog-switch-focus': selectId === index,
                        'dialog-switch-not-focus': selectId !== index,
                        'dialog-switch-not-last': index !== count - 1
                    }"
                    :style="{'width': (100 / count) + '%'}"
                    :key="category.name"
                    class="dialog-switch"
                    @click="focus(index)">
                    <strong>{{ category.title }} </strong>
                </li>
            </ul>
        </div>
        <div class="dialog-panel-container">
            <div
                v-for="(category, index) in this.fields"
                :class="selectId === index ? 'dialog-panel-focus' : 'dialog-panel-hide'"
                :key="category.name"
                class="dialog-panel">
                <dialog-form
                    :fields="category.body"
                    v-model="data[category.name]"/>
            </div>
        </div>
    </div>
</template>

<script>
import DialogForm from './DialogForm.vue'

export default {
    name: 'dialog-tab',
    components: { DialogForm },
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
        this.fields.forEach((category) => {
            initialData[category.name] = {}
            category.body.forEach((field) => {
                initialData[category.name][field.name] = field.default ? field.default : {}
            })
        })
        return {
            selectId: 1,
            data: initialData,
            count: this.fields.length
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
    methods: {
        focus (index) {
            this.selectId = index
        }
    },
    inject: ['t']
}
</script>

<style scoped>
    .dialog-tab {
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid #ddd;
        border-radius: 3px 3px 0 0;
    }
    .dialog-switch-container {
        width: 100%;
        height: 25px;
    }

    .dialog-switch-container ul {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;

    }

    .dialog-switch {
        float: left;
        height: 100%;
        cursor: pointer;
        list-style: none;
        text-align: center;
        box-sizing: border-box;
    }

    .dialog-switch-not-last {
        border-right: 1px solid #ddd;
    }

    .dialog-switch-not-focus {
        border-bottom: 1px solid #ddd;
    }

    .dialog-panel-container {
        width: 100%;
    }

    .dialog-panel-hide {
        display: none;
    }

</style>
