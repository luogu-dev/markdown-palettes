<template>
    <div id="mp-luogu-markdown-editor" class="mp-editor-container" :class="{'mp-fullscreen': this.config.fullscreen}">
        <div id="mp-editor-toolbar" class="mp-editor-toolbar">
            <toolbar @change="insert" @click="clickToolbar" @input="handleToolbarOperation"
                     :toolbarConfig="editorConfig.toolbarConfig" ref="toolbar"></toolbar>
        </div>
        <div id="mp-editor-area" :style="{ height: editorHeight }">
            <div id="mp-editor-input-area" class="mp-editor-area mp-input-area" :class="{
                        'mp-editor-area': this.config.previewDisplay === 'normal',
                        'mp-editor-area-full': this.config.previewDisplay === 'hide'
                 }">
                <input-area v-model="code"
                            ref="inputArea"
                            @input="updateCode"
                            @finish="insertCode = null"
                            :insertCode="insertCode"
                            :height="editorHeight"
                            :editorOption="editorConfig.editorOption"></input-area>
            </div>
            <div id="mp-editor-preview-area" class="mp-editor-area mp-preview-area" :class="{
                        'mp-editor-area': this.config.previewDisplay === 'normal',
                        'mp-editor-area-hide': this.config.previewDisplay === 'hide'
                }">
                <preview-area v-model="code" :parsers="editorConfig.parsers" ref="previewArea"></preview-area>
            </div>
        </div>
        <div id="mp-editor-dialog">
            <editor-dialog v-if="showDialog" :request="dialogRequest" @finish="dialogFinish"
                           @close="closeDialog" ref="dialog"></editor-dialog>
        </div>
    </div>
</template>

<style>
    .mp-editor-area {
        box-sizing: border-box;
        width: 50%;
        height: 100%;
        float: left;
    }

    #mp-editor-area {
        overflow: hidden;
        border: 1px solid #ddd;
    }

    .mp-editor-area-full {
        box-sizing: border-box;
        width: 100%;
    }

    .mp-editor-area-hide {
        display: none;
    }

    .mp-preview-area {
        border-left: 1px solid #ddd;
        padding-bottom: 2px;
    }

    .mp-fullscreen {
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
    name: 'markdown-palettes',
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
    data () {
        const config = getConfig(this.config)
        return {
            code: '',
            showDialog: false,
            dialogRequest: {},
            insertCode: null,
            editorConfig: config,
            editorHeight: config.height
        }
    },
    mounted () {
        this.code = this.value
    },
    components: {
        InputArea,
        PreviewArea,
        Toolbar,
        EditorDialog
    },
    methods: {
        updateCode (code) {
            this.$emit('input', code)
        },
        insert (code) {
            if (code !== null) {
                this.insertCode = code
            }
        },
        closeDialog () {
            this.showDialog = false
        },
        dialogFinish (request) {
            this.insert(request.callback(request.data))
            this.closeDialog()
        },
        clickToolbar (request) {
            if (this.showDialog) {
                return
            }
            this.dialogRequest = request
            this.showDialog = true
        },
        handleToolbarOperation (operation) {
            if (operation === 'hide') {
                if (this.config.previewDisplay === 'normal') { this.config.previewDisplay = 'hide' } else { this.config.previewDisplay = 'normal' }
            }
            if (operation === 'fullscreen') {
                if (!this.config.fullscreen) {
                    this.config.fullscreen = true
                    this.editorHeight = (window.innerHeight - this.$refs.toolbar.$el.clientHeight).toString() + 'px'
                } else {
                    this.config.fullscreen = false
                    this.editorHeight = this.editorConfig.height
                }
            }
        }
    },
    watch: {
        value (newValue) {
            this.code = newValue
            this.updateCode(newValue)
        }
    }
}
</script>