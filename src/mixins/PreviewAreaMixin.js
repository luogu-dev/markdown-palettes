import _ from 'lodash'

export default {
    data () {
        return {
            previewAreaLinesBounding: [],
            previewAreaScrollSynced: false,
            codemirrorLoadedLangs: [],
            codemirrorFailedLangs: [],
            codemirrorLoadingLangs: [],
            codemirrorNeededLangs: [],
            previewContent: ''
        }
    },
    created () {
        this.debouncedPreviewAreaEmitScrollSync = _.debounce(this.previewAreaEmitScrollSync, 100, { maxWait: 100 })
    },
    watch: {
        previewContent () {
            if (this.scrollSync) {
                this.$nextTick(this.previewAreaMaintainLinesBounding)
            } else {
                this.previewAreaLinesBounding = []
            }
            if (typeof val !== 'string') {
                this.codemirrorLoadLeakLangs()
            }
        },
        scrollSync (val) {
            if (val && this.previewAreaLinesBounding.length === 0) {
                this.previewAreaMaintainLinesBounding()
            }
        },
        contentParser () { this.previewContentReparse() },
        code () { this.previewContentReparse() },
        codemirrorNeededLangs (langs) {
            if (langs.length) {
                for (const lang of langs) {
                    const loadingLangs = this.codemirrorLoadingLangs
                    loadingLangs.push(lang)
                    langs.splice(langs.indexOf(lang), 1)
                    import(`codemirror/mode/${lang}/${lang}.js`)
                        .then(() => void this.codemirrorLoadedLangs.push(lang),
                              () => void this.codemirrorFailedLangs.push(lang))
                        .finally(() => void loadingLangs.splice(langs.indexOf(lang), 1))
                }
            }
        },
        codemirrorLoadedLangs () { this.previewContentReparse() }
    },
    methods: {
        previewAreaMaintainLinesBounding () {
            this.previewAreaUpdateLinesBounding()
            const previewArea = this.$refs.previewArea
            Array.from(previewArea.getElementsByTagName('img')).forEach(img => {
                // img will become "bigger" when it's loaded
                img.addEventListener('load', this.previewAreaUpdateLinesBounding)
            })
        },
        previewAreaUpdateLinesBounding () {
            const previewArea = this.$refs.previewArea
            const previewContent = this.$refs.previewContent.$el
            const outerTop = previewContent.getBoundingClientRect().top
            this.previewAreaLinesBounding = []
            previewArea.querySelectorAll('[data-line]').forEach(lineE => {
                const bounding = lineE.getBoundingClientRect()
                const line = parseInt(lineE.dataset.line)
                this.previewAreaLinesBounding.push({
                    line,
                    top: bounding.top - outerTop,
                    bottom: bounding.bottom - outerTop
                })
            })
            _.sortBy(this.previewAreaLinesBounding, [b => b.top])
        },
        previewAreaScroll () {
            if (this.previewAreaScrollSynced) {
                this.previewAreaScrollSynced = false
            } else {
                this.debouncedPreviewAreaEmitScrollSync()
            }
        },
        previewAreaEmitScrollSync () {
            if (!this.scrollSync) return
            const previewArea = this.$refs.previewArea
            const scrollTop = previewArea.scrollTop
            const scrollBottom = scrollTop + previewArea.getBoundingClientRect().height
            const lowerLinePos = _.sortedIndexBy(this.previewAreaLinesBounding, { top: scrollTop }, b => b.top)
            const upperLinePos = _.sortedIndexBy(this.previewAreaLinesBounding, { top: scrollBottom }, b => b.top)
            const linesOffset = []
            for (let linePos = lowerLinePos; linePos < upperLinePos; ++linePos) {
                const line = this.previewAreaLinesBounding[linePos].line
                linesOffset[line] = {
                    top: this.previewAreaLinesBounding[linePos].top - scrollTop,
                    bottom: this.previewAreaLinesBounding[linePos].bottom - scrollTop
                }
            }
            this.doScrollSync('previewArea', {
                scrollInfo: {
                    top: scrollTop,
                    bottom: scrollBottom,
                    height: scrollBottom - scrollTop
                },
                linesOffset: linesOffset
            })
        },
        previewAreaUpdateScrollSync ({ cursorLine, scrollInfo, viewport, linesOffset }) {
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
                    scroll = previewLineOffset.bottom - editorLineOffset.bottom
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
            const lowerLineE = getLine(lowerLine)
            const upperLineE = getLine(upperLine)
            const hasLowerLine = lowerLineE !== null
            const hasUpperLine = upperLineE !== null
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
                this.previewAreaScrollSynced = true
                previewArea.scrollTop += scroll
            }
        },
        previewContentReparse () {
            this.previewContent = this.contentParser(this.code)
        },
        codemirrorLoadLeakLangs () {
            const usedLangSet = new Set()
            function dfs (node) {
                if (node.tagName === 'code') {
                    const match = /(?:^|\s)language-(.+)(?:$|\s)/.exec(node.attrs['class'])
                    if (match) {
                        usedLangSet.add(match[1])
                    }
                } else if (node.children) {
                    node.children.forEach(dfs)
                }
            }
            dfs(this.previewContent.currentNode);
            ([...usedLangSet]).filter(lang =>
                !this.codemirrorLoadedLangs.includes(lang) &&
                !this.codemirrorFailedLangs.includes(lang) &&
                !this.codemirrorLoadingLangs.includes(lang) &&
                !this.codemirrorNeededLangs.includes(lang))
                .forEach(lang => void this.codemirrorNeededLangs.push(lang))
        }
    }
}
