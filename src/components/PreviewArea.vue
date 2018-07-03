<template>
    <div id="mp-preview-area" ref="previewArea" @click="clickArea">
        <div id="mp-preview-content" v-html="content" ref="previewContent"></div>
    </div>
</template>

<style>
    #mp-preview-content {
        color: #333;
        padding: 10px;
        padding-left: 20px;
        padding-right: 20px;
        overflow: auto;
        height: auto;
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

    #mp-preview-content code {
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
import tween from './utils/tween.js'
import computeFromParent from './utils/computeFromParent.js'

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
    computed: {
        ...computeFromParent('cursorLine'),
        ...computeFromParent('cursorOffset'),
        ...computeFromParent('scrolled'),
        ...computeFromParent('clickLine'),
        ...computeFromParent('clickOffset')
    },
    data () {
        return {
            content: '',
            areaScrollTop: 0,
            tweenAnimation: null
        }
    },
    mounted () {
        this.updateContent(this.value)
    },
    methods: {
        updateContent (newContent) {
            this.content = this.parser(newContent)
            this.$nextTick(this.updateScroll)
        },
        updateScroll () {
            const previewArea = this.$refs.previewArea
            const previewContent = this.$refs.previewContent
            let line = previewArea.querySelector('.current-line[data-line]')
            if(line)
                line.classList.remove('current-line')
            line = previewArea.querySelector(`[data-line="${this.cursorLine}"]`)
            if(line){
                const lineBounding = line.getBoundingClientRect()
                const contentTop = previewContent.getBoundingClientRect().top
                const lineOffset = Math.min(lineBounding.bottom - contentTop - this.cursorOffset, lineBounding.top - contentTop)
                this.areaScrollTop = previewArea.scrollTop
                if(this.tweenAnimation){
                    this.tweenAnimation.cancel()
                    this.tweenAnimation = null
                }
                if(this.scrolled)
                    this.areaScrollTop = lineOffset
                else
                    this.tweenAnimation = tween(this.$data, 0.1, {areaScrollTop: lineOffset})
                line.classList.add('current-line')
            }
        },
        clickArea ({target}) {
            const clickLine = target.dataset.line
            if(clickLine !== undefined) {
                this.clickLine = clickLine
                const previewArea = this.$refs.previewArea
                this.clickOffset = target.getBoundingClientRect().bottom - previewArea.getBoundingClientRect().top
            }
        }
    },
    watch: {
        value (newContent) {
            this.updateContent(newContent)
        },
        cursorLine () {
            this.updateScroll()
        },
        cursorOffset () {
            this.updateScroll()
        },
        areaScrollTop (val) {
            const previewArea = this.$refs.previewArea
            previewArea.scrollTop = val
        }
    }
}
</script>
