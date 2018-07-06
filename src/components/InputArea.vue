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
        },
        cursorLine: {
            get () {
                return this.$parent.cursorLine
            },
            set (val) {
                this.$parent.cursorLine = val
            }
        },
        cursorOffest: {
            get () {
                return this.$parent.cursorOffest
            },
            set (val) {
                this.$parent.cursorOffest = val
            }
        },
        scrolled: {
            get () {
                return this.$parent.scrolled
            },
            set (val) {
                this.$parent.scrolled = val
            }
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

        const updateScroll = (cm, scrolled) => {
            const cursor = cm.getCursor()
            this.cursorLine = cursor.line
            this.cursorOffest = cm.cursorCoords(cursor, 'local').bottom - cm.getScrollInfo().top
            this.scrolled = scrolled === true
        }
        this.editor.on('cursorActivity', updateScroll)
        this.editor.on('viewportChange', updateScroll)
        this.editor.on('scroll', cm => updateScroll(cm, true))
    },
    methods: {
        updateCode (code) {
            this.$emit('input', code)
        }
    }
}
</script>
