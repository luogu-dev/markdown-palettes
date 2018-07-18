<template>
    <div class="mp-dialog-codemirror">
        <label v-if="title">{{ title }}</label>
        <div class="mp-dialog-codemirror-editor" ref="inputArea"></div>
    </div>
</template>

<style scoped lang="stylus">
    .mp-dialog-codemirror
        overflow: auto
    .mp-dialog-codemirror label
        padding-top: 5px
        vertical-align: top
        margin-right: 10px
        width: 20%
        font-size: 14px
        color: #666
</style>

<script>
import AbstractDialogComponent from './AbstractDialogComponent'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'

export default {
    name: 'dialog-codemirror',
    extends: AbstractDialogComponent,
    data () {
        return {
            editor: null
        }
    },
    mounted () {
        this.editor = CodeMirror(this.$refs.inputArea, this.editorOption)
        this.editor.setValue(this.value)
        this.editor.on('change', cm => void (this.value = cm.getValue()))
    },
    computed: {
        editorOption () {
            const defaultSetting = {
                lineNumbers: true,
                lineWrapping: true,
                height: '200px'
            }
            Object.freeze(defaultSetting)
            return Object.assign({}, defaultSetting, this.param ? this.param.editorSetting : undefined)
        }
    },
    watch: {
        value (val) {
            if (this.editor.getValue() !== val) {
                this.editor.setValue(val)
            }
        }
    }
}
</script>
