<template>
    <div id="editor-dialog">
        <div class="dialog-mask">
            <div class="dialog-wrapper">
                <div class="dialog-container">

                    <div class="dialog-header">
                        <strong>{{ request.title }}</strong>
                        <a class="fa fa-close dialog-close" @click="close()"></a>
                    </div>
                    <div class="dialog-body">
                        <div class="dialog-form">
                            <div class="dialog-field"v-for="field in request.body">
                                <label>{{ field.title }}</label>
                                <input class="dialog-input" v-model="responseData[field.name]">
                                <br>
                            </div>
                        </div>

                        <div class="dialog-footer">
                            <div>
                                <button class="dialog-button" @click="close()">取消</button>
                                <button class="dialog-button" @click="finish()"  style="margin-right: 7px">确定</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .dialog-mask {
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

    .dialog-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .dialog-container {
        width: 380px;
        margin: 0px auto;
        background-color: #fff;
        border-radius: 2px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
        transition: all .3s ease;
        font-family: Helvetica, Arial, sans-serif;
    }
    .dialog-header {
        padding: 11px 20px;
        border-bottom: 1px solid #eee;
    }

    .dialog-header strong {
        color: #666;
    }

    .dialog-body {
        padding: 20px 30px;
        padding-bottom: 10px;
    }

    .dialog-field {
        margin-bottom: 8px;
        overflow:auto;
    }
    .dialog-field label  {
        display: inline-block;
        width: 75px;
        font-size: 14px;
        color: #666;
    }

    .dialog-input {
        display: inline-block;
        width: 220px;
        color: #999;
        padding: 8px;
        border: 1px solid #ddd;
    }
    .dialog-footer {
        overflow:auto;
    }

    .dialog-button {
        display: inline-block;
        float: right;
        color: #666;
        min-width: 75px;
        cursor: pointer;
        background: #fff;
        padding: 7px 10px;
        border: 1px solid #ddd;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        -ms-border-radius: 3px;
        -o-border-radius: 3px;
        border-radius: 3px;
    }

    .dialog-enter {
        opacity: 0;
    }

    .dialog-leave-active {
        opacity: 0;
    }

    .dialog-enter .dialog-container,
    .dialog-leave-active .dialog-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    .dialog-close {
        font-size: 18px;
        color: #ccc;
        float: right;
    }
</style>

<script>
    import "font-awesome/css/font-awesome.css"

    export default {
        name: 'editor-dialog',
        props: {
            request: {
                type: Object,
                default: function() {
                    return {
                        title: "Test",
                        body: [
                            {
                                name: "test",
                                title: "2333",
                                default: "666"
                            },
                            {
                                name: "test",
                                title: "2333",
                                default: "666"
                            }
                        ]
                    }
                }
            }
        },
        data: function () {
            console.log("init")
            return {
                responseData: {}
            }
        },
        computed: {
            response() {
                let res = this.request
                res.data = this.responseData
                return res
            }
        },
        mounted: function() {
            let initialData = {}

            this.request.body.forEach(function (field) {
                initialData[field.name] = field.default ? field.default : ''
            })

            this.responseData = initialData
        },
        methods: {
            close() {
                this.$emit('close')
            },
            finish() {
                this.$emit('finish', this.response)
            }
        }
    }
</script>