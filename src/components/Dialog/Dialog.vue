<template>
    <div class="mp-editor-dialog">
        <div class="mp-dialog-mask">
            <div class="mp-dialog-wrapper">
                <div class="mp-dialog-container">

                    <div class="mp-dialog-header">
                        <strong>{{ t(request.title) }}</strong>
                        <a
                            class="fa fa-times mp-dialog-close"
                            @click="close"/>
                    </div>

                    <form
                        class="mp-dialog-body"
                        @submit.prevent="finish">
                        <dialog-form
                            v-if="request.type === 'form'"
                            :fields="request.body"
                            v-model="responseData"/>
                        <dialog-tab
                            v-else-if="request.type === 'tab'"
                            :fields="request.body"
                            v-model="responseData"/>

                        <div class="mp-dialog-footer">
                            <div>
                                <button
                                    class="mp-dialog-button"
                                    type="button"
                                    @click="close">{{ t('取消') }}</button>
                                <button
                                    class="mp-dialog-button"
                                    type="submit"
                                    style="margin-right: 7px">{{ t('确定') }}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mp-dialog-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .mp-dialog-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .mp-dialog-container {
        width: 500px;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
    .mp-dialog-header {
        padding: 11px 20px;
        border-bottom: 1px solid #eee;
    }

    .dialog-header strong {
        color: #666;
    }

    .mp-dialog-body {
        padding: 20px 30px;
        padding-bottom: 10px;
    }

    .mp-dialog-footer {
        overflow:auto;
    }

    .mp-dialog-button {
        display: inline-block;
        float: right;
        color: #666;
        min-width: 75px;
        cursor: pointer;
        background: #fff;
        padding: 7px 10px;
        border: 1px solid #ddd;
        border-radius: 3px;
    }

    .mp-dialog-enter {
        opacity: 0;
    }

    .mp-dialog-leave-active {
        opacity: 0;
    }

    .mp-dialog-enter .mp-dialog-container,
    .mp-dialog-leave-active .mp-dialog-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .mp-dialog-close {
        font-size: 18px;
        color: #ccc;
        float: right;
    }
</style>

<script>
import DialogForm from './DialogForm.vue'
import DialogTab from './DialogTab.vue'

export default {
    name: 'editor-dialog',
    components: { DialogForm, DialogTab },
    props: {
        request: {
            type: Object,
            required: true
        }
    },
    data () {
        const initialData = {}
        this.request.body.forEach((field) => {
            if (this.request.type === 'form') {
                initialData[field.name] = field.default ? field.default : ''
            } else if (this.request.type === 'tab') {
                initialData[field.name] = {}
            }
        })
        return {
            responseData: initialData
        }
    },
    computed: {
        response () {
            return { ...this.request, data: this.responseData }
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
    inject: ['t']
}
</script>
