export default {
    name: 'scrollSync',
    icon () { return this.scrollSync ? 'fa-lock' : 'fa-lock-open' },
    title: '同步滚动',
    action: {
        event: 'scrollSync'
    }
}
