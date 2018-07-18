export default {
    name: 'hide',
    icon () { return this.previewDisplay === 'hide' ? 'fa-eye-slash' : 'fa-eye' },
    title () { return this.previewDisplay === 'hide' ? '显示预览' : '隐藏预览' },
    action: {
        event: 'hide'
    }
}
