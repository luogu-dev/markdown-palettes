<template>
    <div id="mp-preview-area" :style="{ height: height }">
        <div id="mp-preview-content" v-html="content"></div>
    </div>
</template>

<style>
    #mp-preview-content {
        color: #333;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        overflow: auto;
        word-wrap:break-word;
    }

    #mp-preview-area {
        overflow: auto;
        background-color: white;
        height: 100%;
    }

    #mp-preview-content table {
        border-collapse: collapse;
        border-spacing: 0;
        display: block;
        width: 100%;
        overflow: auto;
        word-break: keep-all;
        margin: 10px;
    }

    #mp-preview-content table th, td {
        border: 1px solid #ddd;
        padding: 6px 13px;
    }

    code.mp-code {
        font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
        font-size: 15px;
    }

    #mp-preview-content img {
        max-width: 100%;
    }

    #mp-preview-content p {
        margin: 1rem 0;
    }

    #mp-preview-content h1, #mp-preview-content h2, #mp-preview-content h3,
    #mp-preview-content h4, #mp-preview-content h5, #mp-preview-content h6 {
        margin: .5rem 0;
    }

    #mp-preview-content h1, #mp-preview-content h2 {
        padding-bottom: .2em;
        border-bottom: solid 1px #eee;
    }

    #mp-preview-content ul, #mp-preview-content ol {
        padding-left: 1.5em;
    }

    #mp-preview-content ul {
        list-style: outside disc;
    }

    #mp-preview-content ol {
        list-style: outside decimal;
    }

    #mp-preview-content hr {
        margin: 1em 0;
        height: 0;
        border: none;
        border-bottom: solid 1px #eee;
    }
</style>

<script>
export default {
    name: 'preview-area',
    props: {
        value: {
            type: String,
            default: ''
        },
        parser: {
            type: Function
        },
        height: {
            type: String
        }
    },
    data () {
        return {
            content: ''
        }
    },
    mounted () {
        this.updateContent(this.value)
    },
    methods: {
        updateContent (newContent) {
            this.content = this.parser(newContent)
        }
    },
    watch: {
        value (newContent) {
            this.updateContent(newContent)
        }
    }
}
</script>