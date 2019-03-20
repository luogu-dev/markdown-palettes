export default function headerFactory (level) {
    return {
        name: 'h' + level,
        class: ['mp-icon-header'],
        content: 'H' + level,
        title: level + '级标题',
        action () {
            const line = this.editor.getCursor().line
            const leading = this.editor.getRange({ line, ch: 0 }, { line, ch: 7 })
            const match = /^(#{1,6} )/.exec(leading)
            this.editor.replaceRange(''.padEnd(level, '#') + ' ', { line, ch: 0 }, match === null ? undefined : { line, ch: match[1].length })
            this.editor.focus()
        }
    }
}
