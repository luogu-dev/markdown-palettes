export default {
    data () {
        return {
            showDialog: false,
            dialogRequest: {},
            dialogBeforeOpenIsFocusEditor: null
        }
    },
    methods: {
        insertCode (code) {
            if (code) {
                let insert = this.ensureValue(code)
                if (!Array.isArray(insert)) {
                    insert = [insert, '']
                }
                const { line: lineFrom, ch: chFrom } = this.editor.getCursor('from')
                const { line: lineTo, ch: chTo } = this.editor.getCursor('to')
                const { line: lineHead, ch: chHead } = this.editor.getCursor('head')
                const selection = this.editor.getSelection()
                this.editor.replaceSelection(insert[0] + selection + insert[1])
                const bfLns = insert[0].split('\n')
                const secLns = selection.split('\n')
                const newLineFrom = lineFrom + bfLns.length - 1
                const newLineTo = newLineFrom + (lineTo - lineFrom)
                const newChFrom = bfLns.length === 1 ? chFrom + bfLns[0].length : bfLns[bfLns.length - 1].length
                const newChTo = secLns.length === 1 ? newChFrom + selection.length : chTo
                const newFrom = { line: newLineFrom, ch: newChFrom }
                const newTo = { line: newLineTo, ch: newChTo }
                this.editor.setSelection(
                    lineHead === lineFrom && chHead === chFrom ? newTo : newFrom,
                    selection !== '' ? lineHead === lineFrom && chHead === chFrom ? newFrom : newTo : undefined
                )
                this.editor.focus()
            }
        },
        closeDialog () {
            this.showDialog = false
            if (this.dialogBeforeOpenIsFocusEditor) {
                this.editor.focus()
            }
        },
        openDialog (request) {
            this.dialogRequest = request
            this.showDialog = true
            this.dialogBeforeOpenIsFocusEditor = this.editor.hasFocus()
        },
        dialogFinish (request) {
            if (request.callback) {
                this.insertCode(request.callback(request.data))
            }
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
