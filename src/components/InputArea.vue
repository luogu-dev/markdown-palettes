<template>
    <div id="mp-input-area">
        <codemirror
                :value="code"
                :options="editorOption"
                ref="editor"
                @change="updateCode">
        </codemirror>
    </div>
</template>

<style>
    #mp-input-area {
        height: 100%;
    }
    /* hack CodeMirror */
    .CodeMirror {
        height: 100% !important;
    }

    .CodeMirror-scroll {
        height: 100%;
        overflow-y: hidden;
        overflow-x: auto;
    }

    .vue-codemirror-wrap {
        height: 100%;
    }
</style>

<script>
import {codemirror} from 'vue-codemirror-lite'
import 'codemirror/mode/markdown/markdown.js'
import _ from 'lodash'

export default {
    name: 'input-area',
    props: {
        value: {
            type: String
        },
        editorOption: {
            type: Object
        },
        insertCode: {
            default: null
        },
        scrollSync: {
            type: Boolean
        }
    },
    computed: {
        editor () {
            return this.$refs.editor.editor
        }
    },
    watch: {
        insertCode (insert) {
            if (insert === null) {
                return
            }

            if (typeof insert === 'function') { insert = insert() }

            if (!Array.isArray(insert)) {
                insert = [insert, '']
            }

            const cursor = this.editor.getCursor()
            const selection = this.editor.getSelection()

            this.editor.replaceSelection(insert[0] + selection + insert[1])

            if (selection === '') {
                this.editor.setCursor(cursor.line, cursor.ch + 2)
            }

            this.$emit('finish')
        },
        value (newValue) {
            this.code = newValue
        }
    },
    data: function () {
        return {
            code: '',
            scrollSynced: false,
            scrollAnimation: null
        }
    },
    components: {
        codemirror
    },
    mounted: function () {
        this.code = this.value

        const debouncedEmitScrollSync = _.debounce(this.emitScrollSync, 50, { maxWait: 50 })
        const scrollSync = () => {
            if (this.scrollSynced) {
                this.scrollSynced = false
            } else {
                debouncedEmitScrollSync()
                if (this.scrollAnimation) {
                    this.scrollAnimation.cancel()
                }
            }
        }
        this.editor.on('cursorActivity', scrollSync)
        this.editor.on('scroll', scrollSync)
    },
    methods: {
        updateCode (code) {
            this.$emit('input', code)
        },

        emitScrollSync () {
            if (!this.scrollSync) return
            const cursorLine = this.editor.getCursor().line
            const scrollInfo = this.editor.getScrollInfo('local')
            const viewport = {
                from: this.editor.lineAtHeight(scrollInfo.top, 'local'),
                to: this.editor.lineAtHeight(scrollInfo.top + scrollInfo.clientHeight, 'local') + 1
            }
            const linesOffset = []
            for (let line = viewport.from; line < viewport.to; ++line) {
                const coords = this.editor.cursorCoords({ line, ch: 0 }, 'local')
                linesOffset[line] = {
                    top: coords.top - scrollInfo.top,
                    bottom: coords.bottom - scrollInfo.top
                }
            }
            const event = {
                cursorLine, scrollInfo, viewport, linesOffset
            }
            this.$emit('scroll-sync', event)
        },
        updateScrollSync ({ scrollInfo, linesOffset }) {
            if (!linesOffset.length) {
                return
            }
            const scrollMid = scrollInfo.height / 2
            let syncLine
            linesOffset.forEach(({ top }, line) => {
                if (typeof syncLine === 'undefined' || Math.abs(top - scrollMid) < Math.abs(linesOffset[syncLine].top - scrollMid)) {
                    syncLine = line
                }
            })
            const scrollTop = this.editor.getScrollInfo().top
            const editorLineOffset = this.editor.heightAtLine(syncLine, 'local') - scrollTop
            if (this.scrollAnimation) {
                this.scrollAnimation.cancel()
            }
            let animationCancelled = false
            let animationSkipFrame = false
            const animationFrom = scrollTop, animationTo = scrollTop + editorLineOffset - linesOffset[syncLine].top
            const animationStartTime = Date.now()
            const animationDuration = 200
            const animationFrameCallback = () => {
                if (animationSkipFrame) {
                    // skip frame so that user can scroll to interrupt animation
                    requestAnimationFrame(animationFrameCallback)
                    animationSkipFrame = false
                } else if (!animationCancelled) {
                    const currentTime = Date.now()
                    const precent = (currentTime - animationStartTime) / animationDuration
                    this.scrollSynced = true
                    if (precent >= 1) {
                        this.editor.scrollTo(null, animationTo)
                    } else {
                        this.editor.scrollTo(null, (animationTo - animationFrom) * precent + animationFrom)
                        requestAnimationFrame(animationFrameCallback)
                        animationSkipFrame = true
                    }
                }
            }
            animationFrameCallback()
            this.scrollAnimation = {
                cancel () {
                    animationCancelled = true
                }
            }
        }
    }
}
</script>
