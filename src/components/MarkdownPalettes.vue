<template>
    <div class="mp-editor-container" :class="{'mp-full-screen': this.fullScreen}">
        <div class="mp-editor-toolbar">
            <toolbar @change="insert" @click="clickToolbar" @input="handleToolbarOperation"
                     :toolbarConfig="editorConfig.toolbarConfig" ref="toolbar"></toolbar>
        </div>
        <div class="mp-editor-ground">
            <div class="mp-editor-zone mp-input-zone" :class="{
                        'mp-editor-zone': this.config.previewDisplay === 'normal',
                        'mp-editor-zone-full': this.config.previewDisplay === 'hide'
                 }">
                <!-- <input-area v-model="code"
                            ref="inputArea"
                            @input="updateCode"
                            @finish="insertCode = null"
                            @scroll-sync="doScrollSync('editor', $event)"
                            :insertCode="insertCode"
                            :editorOption="editorConfig.editorOption"
                            :scrollSync="scrollSync"></input-area> -->
                <div class="mp-input-area" ref="inputArea"></div>
            </div>
            <div class="mp-editor-zone mp-preview-zone" :class="{
                        'mp-editor-zone': this.config.previewDisplay === 'normal',
                        'mp-editor-zone-hide': this.config.previewDisplay === 'hide'
                }">
                <preview-area v-model="code" :parser="contentParser" ref="previewArea"
                              @scroll-sync="doScrollSync('preview', $event)"
                              :scrollSync="scrollSync"></preview-area>
            </div>
        </div>
        <div>
            <editor-dialog v-if="showDialog" :request="dialogRequest" @finish="dialogFinish"
                           @close="closeDialog" ref="dialog"></editor-dialog>
        </div>
    </div>
</template>

<style scoped lang="stylus">
    .mp-editor-container
        position:relative
        height: 100%
        border: 1px solid #ddd
    .mp-full-screen
        position: fixed
        z-index: 9997
        top: 0
        left: 0
        height: 100%
        width: 100%

    .mp-editor-toolbar
        float: left
        width: 100%
        height: 40px
    .mp-editor-ground
        position: absolute
        width: 100%
        top: 40px
        bottom: 0
        overflow: hidden
        border-top: 1px solid #ddd

    .mp-editor-zone
        box-sizing: border-box
        width: 50%
        height: 100%
        float: left
    .mp-editor-zone-full
        box-sizing: border-box
        width: 100%
    .mp-editor-zone-hide
        display: none

    .mp-preview-zone
        border-left: 1px solid #ddd
        padding-bottom: 2px

    .mp-input-area
        height: 100%
    .mp-input-area >>> .CodeMirror
        height: 100%
</style>

<script>
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/gfm/gfm'

import PreviewArea from './PreviewArea.vue'
import Toolbar from './Toolbar.vue'
import EditorDialog from './Dialog.vue'

import { defaultConfig, getConfig } from './DefaultConfig'
import { contentParserFactory } from './ContentParserFactory'
import InjectLnParser from './plugins/InjectLnParser.js'
import { getText } from './i18n'

export default {
    name: 'markdown-palettes',
    props: {
        value: {
            type: String,
            default: ''
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
            editor: null,
            code: '',
            showDialog: false,
            dialogRequest: {},
            insertCode: null,
            editorConfig: config,
            editorHeight: '500px',
            fullScreen: config.fullScreen,
            contentParser: contentParserFactory([...config.parsers, InjectLnParser]),
            scrollSync: config.scrollSync
        }
    },
    mounted () {
        this.editor = CodeMirror(this.$refs.inputArea, this.editorConfig.editorOption)
        this.editor.on('change', cm => {
            const code = cm.getValue()
            this.code = code
            this.$emit('input', code)
        })
        this.code = this.value
    },
    components: {
        PreviewArea,
        Toolbar,
        EditorDialog
    },
    methods: {
        setCode (code) {
            this.editor.setValue(code)
            this.code = code
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
            if (operation === 'fullScreen') {
                if (!this.fullScreen) {
                    this.fullScreen = true
                } else {
                    this.fullScreen = false
                }
            }
            if (operation === 'scrollSync') {
                this.scrollSync = !this.scrollSync
            }
        },
        doScrollSync (emitter, info) {
            if (emitter === 'editor') {
                this.$refs.previewArea.updateScrollSync(info)
            } else if (emitter === 'preview') {
                this.$refs.inputArea.updateScrollSync(info)
            }
        }
    },
    watch: {
        value (newValue) {
            this.setCode(newValue)
        }
    },
    provide: () => ({ t: getText })
}
</script>
