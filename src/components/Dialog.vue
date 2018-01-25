<template>
    <div id="mp-editor-dialog">
        <div class="mp-dialog-mask">
            <div class="mp-dialog-wrapper">
                <div class="mp-dialog-container">

                    <div class="mp-dialog-header">
                        <strong>{{ request.title }}</strong>
                        <a class="fa fa-close mp-dialog-close" @click="close()"></a>
                    </div>
                    <div class="mp-dialog-body">
                        <div class="mp-dialog-form">
                            <div class="mp-dialog-field" v-for="field in request.body">
                                <component :is="field.type" :requestField="field" :param="field.param" @change="handleUpdate"></component>
                            </div>
                        </div>

                        <div class="mp-dialog-footer">
                            <div>
                                <button class="mp-dialog-button" @click="close()">取消</button>
                                <button class="mp-dialog-button" @click="finish()"  style="margin-right: 7px">确定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
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

    .mp-dialog-field {
        margin: 10px 8px;
        overflow:auto;
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
import 'font-awesome/css/font-awesome.css'
import DialogComponents from './dialog-input-components/components'

export default {
    name: 'editor-dialog',
    props: {
        request: {
            type: Object
        }
    },
    data () {
        return {
            responseData: {}
        }
    },
    computed: {
        response () {
            let res = this.request
            res.data = this.responseData
            return res
        }
    },
    mounted () {
        let initialData = {}

        this.request.body.forEach(function (field) {
            initialData[field.name] = field.default ? field.default : ''
        })

        this.responseData = initialData
    },
    methods: {
        close () {
            this.$emit('close')
        },
        finish () {
            this.$emit('finish', this.response)
        },
        handleUpdate (request) {
            this.responseData[request.name] = request.value
        }
    },
    components: DialogComponents
}
</script>