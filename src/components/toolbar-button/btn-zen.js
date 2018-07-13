export default {
    name: 'zen',
    title: '禅模式',
    icon () { return this.zen ? 'fa-compress' : 'fa-expand' },
    action () { this.toggleZen() }
}
