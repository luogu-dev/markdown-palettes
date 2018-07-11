export default {
    data () {
        return {
            showDialog: false,
            dialogRequest: {}
        }
    },
    methods: {
        insertCode (code) {
            if (code != null) {
                let insert = this.ensureValue(code)
                if (!Array.isArray(insert)) {
                    insert = [insert, '']
                }
                const cursor = this.editor.getCursor()
                const selection = this.editor.getSelection()
                this.editor.replaceSelection(insert[0] + selection + insert[1])
                if (selection === '') {
                    this.editor.setCursor(cursor.line, cursor.ch + 2)
                }
                this.editor.focus()
            }
        },
        closeDialog () {
            this.showDialog = false
        },
        openDialog (request) {
            this.dialogRequest = request
            this.showDialog = true
        },
        dialogFinish (request) {
            this.insertCode(request.callback(request.data))
            this.closeDialog()
        },
        requestData (request) {
            if (this.showDialog) {
                return
            }
            this.openDialog(request)
        }
    }
}
