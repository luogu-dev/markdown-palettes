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
        },
        height: {
            type: String
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
        },
        height (newHeight) {
            this.editor.setSize('100%', newHeight)
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
        this.editor.setSize('100%', this.height)
    },
    methods: {
        updateCode (code) {
            this.$emit('input', code)
        }
    }
}
</script>