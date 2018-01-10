<template>
    <div id="luogu-mardown-editor">
        <div id="editor-input-area" class="editor-area">
            <input-area v-model="code" @input="updateCode"></input-area>
        </div>
        <div id="editor-preview-area" class="editor-area">

        </div>
    </div>
</template>

<style>
    .editor-area{
        width: 50%;
    }
</style>

<script>
    import InputArea from "./InputArea.vue"

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
            InputArea
        },
        methods: {
            updateCode(code) {
                this.$emit('input', code);
            }
        }
    }
</script>