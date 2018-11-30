export default {
    methods: {
        toolbarAction (btn) {
            if (typeof btn.action === 'function') {
                btn.action.callback(this)
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
    }
}
