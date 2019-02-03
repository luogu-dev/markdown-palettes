<template>
    <div
        :class="{'mp-full-screen': fullScreen}"
        class="mp-editor-container">
        <div
            v-if="toolbarBtns.length"
            class="mp-editor-toolbar">
            <ul class="mp-editor-menu">
                <li
                    v-for="(item, index) in toolbarBtns"
                    :class="{'mp-divider':item.name === '|'}"
                    :key="item.name + index">
                    <span v-if="item.name === '|'">|</span>
                    <a
                        v-else
                        :title="t(ensureValue(item.title))"
                        unselectable="on"
                        @click="toolbarAction(item)">
                        <i
                            :class="['fa', ensureValue(item.icon)]"
                            unselectable="on">{{ ensureValue(item.content) }}</i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mp-editor-ground">
            <div
                :class="{
                    'mp-editor-zone': previewDisplay === 'normal',
                    'mp-editor-zone-full': previewDisplay === 'hide',
                    'mp-editor-zone-hide': previewDisplay === 'full'
                }"
                class="mp-editor-zone mp-input-zone">
                <div
                    ref="inputArea"
                    class="mp-input-area"/>
            </div>
            <div
                :class="{
                    'mp-editor-zone': previewDisplay === 'normal',
                    'mp-editor-zone-hide': previewDisplay === 'hide',
                    'mp-editor-zone-full': previewDisplay === 'full'
                }"
                class="mp-editor-zone mp-preview-zone">
                <div
                    ref="previewArea"
                    class="mp-preview-area"
                    @scroll="previewAreaScroll">
                    <preview-area
                        ref="previewContent"
                        :content="previewContent"
                        class="mp-preview-content"/>
                </div>
            </div>
        </div>
        <div>
            <editor-dialog
                v-if="showDialog"
                :request="dialogRequest"
                @finish="dialogFinish"
                @close="closeDialog"/>
        </div>
    </div>
</template>

<style scoped lang="stylus">
    .mp-editor-zone
        height: 100%
    .mp-input-zone
        box-sizing: border-box
        width: 100%
        height: 100%
    .mp-preview-zone
        display: none

    .mp-editor-zone-full
        display: block
        box-sizing: border-box
        width: 100%
        border: none !important
    .mp-editor-zone-hide
        display: none !important
    @media only screen and (min-width: 768px)
        .mp-editor-zone
            display block
            box-sizing: border-box
            width: 50%
            float: left

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
        box-sizing: border-box
        background-color: white
    .mp-editor-ground
        position: absolute
        width: 100%
        top: 40px
        bottom: 0
        overflow: hidden
        border-top: 1px solid #ddd
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
    .mp-preview-content >>> blockquote
        padding: 10px 20px
        margin: 0 0 20px
        border-left: 5px solid #eee

    .mp-editor-menu>li>a
        outline: 0
        color: #666
        cursor pointer
        display: inline-block
        min-width: 24px
        font-size: 16px
        text-decoration: none
        text-align: center
        border: 1px solid #fff
        transition: all 300ms ease-out
    .mp-editor-menu>li>a.active, .mp-editor-menu>li>a:hover
        border: 1px solid #ddd
        background-color: rgb(238, 238, 238)
    .mp-editor-menu
        margin: 0
        padding-left: 8px
        list-style: none
    .mp-editor-menu>li>a>.fa
        text-align: center
        display: block
        padding: 5px 0
    .mp-editor-menu>li
        margin: 0
        padding: 5px 1px
        display: inline-block
        position: relative
    .mp-editor-menu>li .divider
        display: inline-block
        text-indent: -9999px
        margin: 0 5px
        height: 65%
        border-right: 1px solid #ddd
</style>

<script>
import '@fortawesome/fontawesome-free/css/solid.css'
import '@fortawesome/fontawesome-free/css/fontawesome.css'

import Dialog from './components/Dialog/Dialog.vue'
import PreviewArea from './components/PreviewArea.js'

import InputAreaMixin from './mixins/InputAreaMixin'
import PreviewAreaMixin from './mixins/PreviewAreaMixin'
import ToolbarMixin from './mixins/ToolbarMixin'
import ActionMixin from './mixins/ActionMixin'

import { defaultConfig, getConfig } from './utils/DefaultConfig'
import { contentParserFactory } from './parsers/ContentParserFactory'
import InjectLnParser from './parsers/InjectLnParser.js'
import { getText } from './utils/i18n'

export default {
    name: 'markdown-palettes',
    components: { 'editor-dialog': Dialog, PreviewArea },
    mixins: [InputAreaMixin, PreviewAreaMixin, ToolbarMixin, ActionMixin],
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
            ...getConfig(this.config),
            editor: null,
            code: ''
        }
    },
    computed: {
        contentParser () {
            return contentParserFactory([...this.parsers, InjectLnParser])
        },
        toolbarBtns () {
            if (window.screen.width > 768) {
                return this.config.bigScreenToolbarConfig
            } else {
                return this.config.smallScreenToolbarConfig
            }
        }
    },
    watch: {
        value (newValue) {
            this.setCode(newValue)
        }
    },
    methods: {
        setCode (code) {
            if (this.code !== code) {
                this.code = code
                this.editor.setValue(code)
            }
        },
        getCode () {
            return this.code
        },

        doScrollSync (emitter, info) {
            if (emitter === 'inputArea') {
                this.previewAreaUpdateScrollSync(info)
            } else if (emitter === 'previewArea') {
                this.inputAreaUpdateScrollSync(info)
            }
        },
        ensureValue (val) {
            if (typeof val === 'function') {
                return val.call(this)
            } else {
                return val
            }
        },

        t: getText
    },
    provide: () => ({ t: getText }),
}
</script>
