export default {
    name: 'fullScreen',
    icon: 'fa-expand-arrows-alt',
    title () { return this.fullScreen ? '取消全屏' : '全屏' },
    action: {
        event: 'fullScreen'
    }
}
