<template>
    <div id="mp-dialog-codemirror">
        <label v-if="title">{{ title }}</label>
        <div class="mp-dialog-codemirror-editor"></div>
        <codemirror
                :value="value"
                :options="this.param.editorSetting"
                ref="editor"
                @change="updateContent">
        </codemirror>
    </div>
</template>

<style>
    #mp-dialog-codemirror {
        overflow: auto;
    }

    #mp-dialog-codemirror label {
        padding-top: 5px;
        vertical-align: top;
        margin-right: 10px;
        width: 20%;
        font-size: 14px;
        color: #666;
    }

    #mp-dialog-codemirror .mp-dialog-codemirror-editor {
        display: inline-block;
        width: 95%;
    }
</style>

<script>
import abstractInputComponent from './AbstractInputComponent'
import { codemirror } from 'vue-codemirror-lite'

export default {
    name: 'dialog-codemirror',
    extends: abstractInputComponent,
    components: {
        codemirror
    },
    mounted () {
        const defaultSetting = {
            lineNumbers: true,
            lineWrapping: true,
            height: '200px'
        }

        if (!this.param.editorSetting) { this.param.editorSetting = defaultSetting } else {
            for (const setting in defaultSetting) {
                if (this.param.editorSetting[setting] === undefined) { this.param.editorSetting[setting] = defaultSetting[setting] }
            }
        }

        this.editor.setSize('100%', this.param.editorSetting.height)
    },
    computed: {
        editor () {
            return this.$refs.editor.editor
        }
    },
    methods: {
        updateContent (newContent) {
            this.value = newContent
        }
    }
}
</script>
