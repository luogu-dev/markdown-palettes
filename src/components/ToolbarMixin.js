export default {
    methods: {
        toolbarAction (btn) {
            if (typeof btn.action === 'function') {
                btn.action.call(this)
            } else {
                this.toolbarHandleActionLegacy(btn.action)
            }
        },
        toolbarHandleActionLegacy (action) {
            if (action.event) {
                this.toolbarHandleEventLegacy(action.event)
            } else if (action.insert) {
                this.insertCode(action.insert)
            } else if (action.request) {
                this.requestData(action.request)
            }
        },
        toolbarHandleEventLegacy (event) {
            if (event === 'hide') {
                if (this.previewDisplay === 'normal') {
                    if (window.screen.width > 768) {
                        this.previewDisplay = 'hide'
                    } else {
                        this.previewDisplay = 'full'
                    }
                } else {
                    this.previewDisplay = 'normal'
                }
            }
            if (event === 'fullScreen') {
                this.fullScreen = !this.fullScreen
            }
            if (event === 'scrollSync') {
                this.scrollSync = !this.scrollSync
            }
        }
    },
    mounted () {
        const keyMap = {}
        for (const btn of this.toolbarBtns) {
            const keyBinding = this.ensureValue(btn.keyBinding)
            if (typeof keyBinding !== 'undefined') {
                keyMap[keyBinding] = () => void this.toolbarAction(btn)
            }
        }
        this.editor.addKeyMap(keyMap)
    }
}
