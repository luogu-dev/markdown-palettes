export default {
    name: 'info',
    icon: 'fa-info-circle',
    title: '关于',
    action: {
        insert () {
            window.open('https://github.com/luogu-dev/markdown-palettes')
            return ''
        }
    }
}
