<template>
    <div id="mp-input-area">
        <codemirror
                :value="code"
                :options="editorOption"
                ref="editor"
                @change="updateCode">
        </codemirror>
    </div>
</template>

<style>
    #mp-input-area {
        height: 100%;
    }
    /* hack CodeMirror */
    .CodeMirror {
        height: 100% !important;
    }

    .CodeMirror-scroll {
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }

    .vue-codemirror-wrap {
        height: 100%;
    }
</style>

<script>
import {codemirror} from 'vue-codemirror-lite'
import 'codemirror/mode/markdown/markdown.js'
import _ from 'lodash'

export default {
    name: 'input-area',
    props: {
        value: {
            type: String
        },
        editorOption: {
            type: Object
        },
        insertCode: {
            default: null
        }
    },
    computed: {
        editor () {
            return this.$refs.editor.editor
        }
    },
    watch: {
        insertCode (insert) {
            if (insert === null) {
                return
            }

            if (typeof insert === 'function') { insert = insert() }

            if (!Array.isArray(insert)) {
                insert = [insert, '']
            }

            const cursor = this.editor.getCursor()
            const selection = this.editor.getSelection()

            this.editor.replaceSelection(insert[0] + selection + insert[1])

            if (selection === '') {
                this.editor.setCursor(cursor.line, cursor.ch + 2)
            }

            this.$emit('finish')
        },
        value (newValue) {
            this.code = newValue
        }
    },
    data: function () {
        return {
            code: ''
        }
    },
    components: {
        codemirror
    },
    mounted: function () {
        this.code = this.value

        const scrollSync = _.debounce(this.emitScrollSync, 50, { maxWait: 50 })
        this.editor.on('cursorActivity', scrollSync)
        this.editor.on('scroll', scrollSync)
    },
    methods: {
        updateCode (code) {
            this.$emit('input', code)
        },

        emitScrollSync () {
            const cursorLine = this.editor.getCursor().line
            const scrollInfo = this.editor.getScrollInfo('local')
            const viewport = {
                from: this.editor.lineAtHeight(scrollInfo.top, 'local'),
                to: this.editor.lineAtHeight(scrollInfo.top + scrollInfo.clientHeight, 'local') + 1
            }
            const linesOffset = []
            for (let line = viewport.from; line < viewport.to; ++line) {
                const coords = this.editor.cursorCoords({ line, ch: 0 }, 'local')
                linesOffset[line] = {
                    top: coords.top - scrollInfo.top,
                    bottom: coords.bottom - scrollInfo.top
                }
            }
            const event = {
                cursorLine, scrollInfo, viewport, linesOffset
            }
            this.$emit('scroll-sync', event)
        }
    }
}
</script>
