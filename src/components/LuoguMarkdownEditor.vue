<template>
    <div id="luogu-markdown-editor" class="editor-container" :class="{'fullscreen': this.config.fullscreen}">
        <div id="editor-toolbar" class="editor-toolbar">
            <toolbar @change="insert" @click="clickToolbar" @input="handleToolbarOperation"
                     :toolbarConfig="editorConfig.toolbarConfig" ref="toolbar"></toolbar>
        </div>
        <div id="editor-area">
            <div id="editor-input-area" class="input-area" :class="{
                        'editor-area': this.config.previewDisplay === 'normal',
                        'editor-area-full': this.config.previewDisplay === 'hide'
                 }">
                <input-area v-model="code"
                            ref="inputArea"
                            @input="updateCode"
                            @finish="insertCode = null"
                            :height="editorHeight"
                            :insertCode="insertCode"
                            :editorOption="editorConfig.editorOption"></input-area>
            </div>
            <div id="editor-preview-area" class="editor-area preview-area" :class="{
                        'editor-area': this.config.previewDisplay === 'normal',
                        'editor-area-hide': this.config.previewDisplay === 'hide'
                }">
                <preview-area v-model="code" :height="editorHeight"
                              :parsers="editorConfig.parsers" ref="previewArea"></preview-area>
            </div>
        </div>
        <div id="editor-dialog">
            <editor-dialog v-if="showDialog" :request="dialogRequest" @finish="dialogFinish"
                           @close="closeDialog" ref="dialog"></editor-dialog>
        </div>
    </div>
</template>

<style>
    .editor-area {
        box-sizing: border-box;
        width: 50%;
        float: left;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
    }

    .editor-area-full {
        box-sizing: border-box;
        width: 100%;
        border: 1px solid #ddd;
    }

    .editor-area-hide {
        display: none;
    }

    .input-area {
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
    }

    .preview-area {
        border-right: 1px solid #ddd;
    }

    .fullscreen {
        position: fixed;
        z-index: 9997;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }
</style>

<script>
    import InputArea from './InputArea.vue'
    import PreviewArea from './PreviewArea.vue'
    import Toolbar from './Toolbar.vue'
    import EditorDialog from './Dialog.vue'

    import {defaultConfig, getConfig} from './DefaultConfig'

    export default {
        name: 'luogu-markdown-editor',
        props: {
            value: {
                type: String
            },
            config: {
                type: Object,
                default: function () {
                    return defaultConfig
                }
            }
        },
        data() {
            let config = getConfig(this.config)
            return {
                code: '',
                showDialog: false,
                dialogRequest: {},
                insertCode: null,
                editorConfig: config,
                editorHeight: config.height
            }
        },
        mounted() {
            this.code = this.value
        },
        components: {
            InputArea,
            PreviewArea,
            Toolbar,
            EditorDialog
        },
        methods: {
            updateCode(code) {
                this.$emit('input', code)
            },
            insert(code) {
                if (code !== null) {
                    this.insertCode = code
                }
            },
            closeDialog() {
                this.showDialog = false
            },
            dialogFinish(request) {
                this.insert(request.callback(request.data))
                this.closeDialog()
            },
            clickToolbar(request) {
                if (this.showDialog) {
                    return
                }
                this.dialogRequest = request
                this.showDialog = true
            },
            handleToolbarOperation(operation) {
                if (operation === 'hide') {
                    if (this.config.previewDisplay === 'normal')
                        this.config.previewDisplay = 'hide'
                    else
                        this.config.previewDisplay = 'normal'
                }
                if (operation === 'fullscreen') {
                    if(!this.config.fullscreen) {
                        this.config.fullscreen = true
                        this.editorHeight = (screen.height - this.$refs.toolbar.$el.clientHeight).toString() + 'px'
                        console.log(this.editorHeight)

                    } else {
                        this.config.fullscreen = false
                        this.editorHeight = this.editorConfig.height
                    }
                }
            }
        }
    }
</script>