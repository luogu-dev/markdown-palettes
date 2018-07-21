export default {
    name: 'preview-area',
    props: {
        content: {
            type: [String, Object],
            default: []
        }
    },
    render (h) {
        const { content } = this
        if (typeof content === 'string') {
            return h('div', { domProps: { innerHTML: content } })
        } else {
            return h('div', null, content.toVue(h))
        }
    }
}
