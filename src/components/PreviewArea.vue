<template>
    <div id="preview-area">
        <div id="preview-content" v-html="content" :stype="{ 'max-height': height }"></div>
    </div>
</template>

<style>
    #preview-content {
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
    }

    #preview-area {
        overflow-y: auto;
        word-wrap:break-word;
    }
</style>

<script>
    import { ContentParser } from './ContentParser'
    import { MarkdownParser } from './plugin/MarkdownParser'
    import KatexParser from './plugin/KatexParser'

    export default {
        name: 'preview-area',
        props: {
            value: {
                type: String,
                default: ''
            },
            height: {
                type: String,
                default: '400px'
            }
        },
        data: function () {
            return {
                content: '',
                parserConfig: {
                    parsers:[
                        KatexParser
                    ]
                }
            }
        },
        mounted: function() {
            this.updateContent($this.value)
        },
        methods: {
            updateContent(newContent) {
                this.content = ContentParser(newContent, this.parserConfig)
            }
        },
        watch: {
            value: function (newContent) {
                this.updateContent(newContent)
            }
        }
    }
</script>