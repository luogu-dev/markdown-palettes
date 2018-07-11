<template>
    <div class="mp-editor-container" :class="{'mp-full-screen': this.fullScreen}">
        <!-- <div class="mp-editor-toolbar">
            <toolbar @change="insert" @click="clickToolbar" @input="handleToolbarOperation"
                     :toolbarConfig="editorConfig.toolbarConfig" ref="toolbar"></toolbar>
        </div> -->
        <div class="mp-editor-ground">
            <div class="mp-editor-zone mp-input-zone" :class="{
                        'mp-editor-zone': previewDisplay === 'normal',
                        'mp-editor-zone-full': previewDisplay === 'hide'
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
                        'mp-editor-zone': previewDisplay === 'normal',
                        'mp-editor-zone-hide': previewDisplay === 'hide'
                }">
                <div class="mp-preview-area" ref="previewArea" @scroll="previewAreaScroll">
                    <div class="mp-preview-content" ref="previewContent" v-html="previewContent"></div>
                </div>
            </div>
        </div>
        <!-- <div>
            <editor-dialog v-if="showDialog" :request="dialogRequest" @finish="dialogFinish"
                           @close="closeDialog" ref="dialog"></editor-dialog>
        </div> -->
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

    .mp-input-area, .mp-input-area >>> .CodeMirror
        height: 100%

    .mp-preview-area
        overflow: auto
        background-color: white
        height: 100%
    .mp-preview-content
        color: #333
        padding: 10px
        padding-left: 20px
        padding-right: 20px
        overflow: auto
        height: auto
        word-wrap:break-word
    .mp-preview-content >>> table
        border-collapse: collapse
        border-spacing: 0
        display: block
        width: 100%
        overflow: auto
        word-break: keep-all
        margin: 10px
    .mp-preview-content >>> table th, .mp-preview-content >>> table td
        border: 1px solid #ddd
        padding: 6px 13px
    .mp-preview-content >>> code
        font-family: Monaco, Menlo, Consolas, "Courier New", monospace
        font-size: 15px
    .mp-preview-content >>> img
        max-width: 100%
    .mp-preview-content >>> p
        margin: 1rem 0
    .mp-preview-content >>> h1, .mp-preview-content >>> h2, .mp-preview-content >>> h3,
    .mp-preview-content >>> h4, .mp-preview-content >>> h5, .mp-preview-content >>> h6
        margin: .5rem 0
    .mp-preview-content >>> h1, .mp-preview-content >>> h2
        padding-bottom: .2em
        border-bottom: solid 1px #eee
    .mp-preview-content >>> ul, .mp-preview-content >>> ol
        padding-left: 1.5em
    .mp-preview-content >>> ul
        list-style: outside disc
    .mp-preview-content >>> ol
        list-style: outside decimal
    .mp-preview-content >>> hr
        margin: 1em 0
        height: 0
        border: none
        border-bottom: solid 1px #eee
</style>

<script>
// import PreviewArea from './PreviewArea.vue'
// import Toolbar from './Toolbar.vue'
// import EditorDialog from './Dialog.vue'
import InputAreaMixin from './InputAreaMixin'
import PreviewAreaMixin from './PreviewAreaMixin'

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
        return {
            editor: null,
            code: '',
            // showDialog: false,
            // dialogRequest: {},
            // insertCode: null,
            // editorHeight: '500px',
            ...getConfig(this.config)
        }
    },
    computed: {
        contentParser () { return contentParserFactory([...this.parsers, InjectLnParser]) }
    },
    methods: {
        setCode (code) {
            this.code = code
            this.editor.setValue(code)
        },
        getCode () {
            return this.code
        },
        // insert (code) {
        //     if (code !== null) {
        //         this.insertCode = code
        //     }
        // },
        // closeDialog () {
        //     this.showDialog = false
        // },
        // dialogFinish (request) {
        //     this.insert(request.callback(request.data))
        //     this.closeDialog()
        // },
        // clickToolbar (request) {
        //     if (this.showDialog) {
        //         return
        //     }
        //     this.dialogRequest = request
        //     this.showDialog = true
        // },
        // handleToolbarOperation (operation) {
        //     if (operation === 'hide') {
        //         if (this.config.previewDisplay === 'normal') { this.config.previewDisplay = 'hide' } else { this.config.previewDisplay = 'normal' }
        //     }
        //     if (operation === 'fullScreen') {
        //         if (!this.fullScreen) {
        //             this.fullScreen = true
        //         } else {
        //             this.fullScreen = false
        //         }
        //     }
        //     if (operation === 'scrollSync') {
        //         this.scrollSync = !this.scrollSync
        //     }
        // },
        doScrollSync (emitter, info) {
            if (emitter === 'inputArea') {
                this.previewAreaUpdateScrollSync(info)
            } else if (emitter === 'previewArea') {
                this.inputAreaUpdateScrollSync(info)
            }
        }
    },
    watch: {
        value (newValue) {
            this.setCode(newValue)
        }
    },
    provide: () => ({ t: getText }),
    mixins: [InputAreaMixin, PreviewAreaMixin]
}
</script>
