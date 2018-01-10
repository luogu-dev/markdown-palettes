<template>
    <div id="input-area">
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
    import { codemirror } from 'vue-codemirror-lite'
    import 'codemirror/mode/markdown/markdown.js'

    export default {
        name: 'input-area',
        props: {
            value: {
                type: String,
                default: ''
            },
            editorOption: {
                default: function () {
                    return {
                        mode: 'markdown',
                        lineNumbers: true
                    }
                }
            }
        },
        computed: {
            editor() {
                return this.$refs.editor.editor
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
        mounted: function() {
            this.code = this.value
            this.editor.focus()
        },
        methods: {
            updateCode(code) {
                this.$emit('input', code)
            }
        }
    }
</script>