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
                        lineNumbers: true,
                        lineWrapping: true
                    }
                }
            },
            height: {
                type: String,
                default: '400px'
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
            this.editor.setSize("100%", this.height);
            this.editor.focus()
        },
        methods: {
            updateCode(code) {
                this.$emit('input', code)
            }
        }
    }
</script>