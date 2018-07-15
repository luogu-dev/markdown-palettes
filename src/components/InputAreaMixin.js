import _ from 'lodash'
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/gfm/gfm'

export default {
    data () {
        return {
            inputAreaScrollSynced: false,
            inputAreaScrollAnimation: null
        }
    },
    mounted () {
        this.editor = CodeMirror(this.$refs.inputArea, this.editorOption)
        this.editor.on('change', cm => {
            const code = cm.getValue()
            if (this.code !== code) {
                this.$emit('input', code)
            }
            this.code = code
        })
        this.setCode(this.value)

        const debouncedEmitScrollSync = _.debounce(this.inputAreaEmitScrollSync, 50, { maxWait: 50 })
        const scrollSync = () => {
            if (this.inputAreaScrollSynced) {
                this.inputAreaScrollSynced = false
            } else {
                debouncedEmitScrollSync()
                if (this.inputAreaScrollAnimation) {
                    this.inputAreaScrollAnimation.cancel()
                }
            }
        }
        this.editor.on('cursorActivity', scrollSync)
        this.editor.on('scroll', scrollSync)
    },
    methods: {
        inputAreaEmitScrollSync () {
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
            this.doScrollSync('inputArea', event)
        },
        inputAreaUpdateScrollSync ({ scrollInfo, linesOffset }) {
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
            if (this.inputAreaScrollAnimation) {
                this.inputAreaScrollAnimation.cancel()
            }
            let animationCancelled = false
            let animationSkipFrame = false
            const animationFrom = scrollTop
            const animationTo = scrollTop + editorLineOffset - linesOffset[syncLine].top
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
                    this.inputAreaScrollSynced = true
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
            this.inputAreaScrollAnimation = {
                cancel () {
                    animationCancelled = true
                }
            }
        }
    }
}
