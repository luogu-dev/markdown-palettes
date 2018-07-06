<template>
    <div id="mp-preview-area" ref="previewArea">
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
import _ from 'lodash'

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
        },
        updateScrollSync ({ cursorLine, scrollInfo, viewport, linesOffset }) {
            const previewArea = this.$refs.previewArea
            const offset = ele => {
                const eleRect = ele.getBoundingClientRect()
                const araRect = previewArea.getBoundingClientRect()
                return {
                    top: eleRect.top - araRect.top,
                    bottom: eleRect.bottom - araRect.top
                }
            }
            const getLine = line => previewArea.querySelector(`[data-line="${line}"]`)
            const getLineHeight = ele => {
                const cst = getComputedStyle(ele)
                const lh = parseFloat(cst.lineHeight)
                const fz = parseFloat(cst.fontSize)
                if (isNaN(lh)) {
                    return fz;
                } else {
                    return lh;
                }
            }
            const calcScroll = line => {
                const lineE = getLine(line)
                const previewLineOffset = offset(lineE)
                const editorLineOffset = linesOffset[line]
                if (typeof editorLineOffset === 'undefined') {
                    return NaN
                }
                let scroll = previewLineOffset.top - editorLineOffset.top
                const tagName = lineE.tagName
                if (/^h\d$/i.test(tagName)) {
                    scroll = previewLineOffset.bottom - editorLineOffset.top - getLineHeight(lineE)
                }
                if (previewLineOffset.top - scroll < 0) {
                    scroll = -previewLineOffset.top
                }
                return scroll
            }

            const syncLine = _.inRange(cursorLine, viewport.from, viewport.to) ? cursorLine : Math.round((viewport.from + viewport.to) / 2)
            let lowerLine, upperLine
            for (lowerLine = syncLine; lowerLine >= viewport.from; --lowerLine) {
                if (getLine(lowerLine) !== null) {
                    break
                }
            }
            for (upperLine = syncLine; upperLine < viewport.to; ++upperLine) {
                if (getLine(upperLine) !== null) {
                    break
                }
            }
            const lowerLineE = getLine(lowerLine), upperLineE = getLine(upperLine)
            const hasLowerLine = lowerLineE !== null,
                  hasUpperLine = upperLineE !== null
            if (!hasLowerLine && !hasUpperLine) {
                // can't sync
                return
            }
            let chosenLine
            if (!hasLowerLine) {
                chosenLine = upperLine
            } else if (!hasUpperLine) {
                chosenLine = lowerLine
            } else if (lowerLine === upperLine) {
                chosenLine = lowerLine
            } else {
                const lowerScroll = calcScroll(lowerLine)
                const upperScroll = calcScroll(upperLine)
                if (Math.abs(lowerScroll) < Math.abs(upperScroll) || isNaN(upperScroll)) {
                    chosenLine = lowerLine
                } else {
                    chosenLine = upperLine
                }
            }
            const scroll = calcScroll(chosenLine)
            if (!isNaN(scroll)) {
                previewArea.scrollTop += scroll
            }
        }
    },
    watch: {
        value (newContent) {
            this.updateContent(newContent)
        }
    }
}
</script>
