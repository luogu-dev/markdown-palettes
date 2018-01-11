<template>
    <div id="preview-area">
        <div id="preview-content" v-html="content"></div>
    </div>
</template>

<style>
    #preview-content {
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }

    #preview-area {
        max-height: 300px;
        overflow-y: auto;
        word-wrap:break-word;
    }
</style>

<script>
    import { ContentParser } from "./ContentParser"
    import { MarkdownParser } from "./plugin/MarkdownParser"
    import KatexParser from "./plugin/KatexParser"

    export default {
        name: "preview-area",
        props: {
            value: {
                type: String,
                default: ""
            }
        },
        data: function () {
            return {
                content: "",
                parserConfig: {
                    parsers:[
                        KatexParser
                    ]
                }
            }
        },
        watch: {
            value: function (newContent) {
                let contentAfterParseMD = MarkdownParser(newContent)
                this.content = ContentParser(contentAfterParseMD, this.parserConfig)
            }
        }
    }
</script>