export default {
    name: 'scrollSync',
    icon () { return this.scrollSync ? 'fa-lock' : 'fa-lock-open' },
    title () { return this.scrollSync ? '停用滚动同步' : '启用滚动同步' },
    action: {
        event: 'scrollSync'
    }
}
