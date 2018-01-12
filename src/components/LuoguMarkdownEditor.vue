<template>
    <div id="luogu-markdown-editor">
        <div id="editor-input-area" class="editor-area input-area">
            <input-area v-model="code" @input="updateCode" :height="this.config.height"></input-area>
        </div>
        <div id="editor-preview-area" class="editor-area preview-area" :height="this.config.height">
            <preview-area v-model="code"></preview-area>
        </div>
    </div>
</template>

<style>
    .editor-area {
        width: 49%;
        float: left;
    }
    .input-area {
        border-right: solid black;
    }
</style>

<script>
    import InputArea from "./InputArea.vue"
    import PreviewArea from "./PreviewArea.vue"

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
            PreviewArea
        },
        methods: {
            updateCode(code) {
                this.$emit('input', code);
            }
        }
    }
</script>