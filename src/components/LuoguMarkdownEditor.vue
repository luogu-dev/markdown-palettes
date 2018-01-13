<template>
    <div id="luogu-markdown-editor" class="editor-container">
        <div id="editor-toolbar" class="editor-toolbar">
            <toolbar></toolbar>
        </div>
        <div id="editor-area">
            <div id="editor-input-area" class="editor-area input-area">
                <input-area v-model="code" @input="updateCode" :height="this.config.height"></input-area>
            </div>
            <div id="editor-preview-area" class="editor-area preview-area" >
                <preview-area v-model="code" :height="this.config.height"></preview-area>
            </div>
        </div>
        <div id="editor-dialog">
            <editor-dialog></editor-dialog>
        </div>
    </div>
</template>

<style>
    .editor-area {
        width: 49%;
        float: left;
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
    }
    .input-area {
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
    }
    .preview-area {
        border-right: 1px solid #ddd;
    }
    .editor-toolbar {
        width: 98%;
        padding-right: 1px;
        min-height: 35px;
        border-right: 1px solid #ddd;
        border-left: 1px solid #ddd;
        border-top: 1px solid #ddd;

    }
</style>

<script>
    import InputArea from "./InputArea.vue"
    import PreviewArea from "./PreviewArea.vue"
    import Toolbar from "./Toolbar.vue"
    import EditorDialog from "./Dialog.vue"

    export default {
        name: "luogu-markdown-editor",
        props: {
           value: {
               type: String,
               default: ''
           },
           config: {
               default: function() {
                    return {
                        height: '500px'
                    }
               }
           }
        },
        data: function () {
            return {
                code: ''
            }
        },
        mounted: function() {
            this.code = this.value
        },
        components: {
            InputArea,
            PreviewArea,
            Toolbar,
            EditorDialog
        },
        methods: {
            updateCode(code) {
                this.$emit('input', code);
            }
        }
    }
</script>