import MarkdownIt from 'markdown-it'

function contentParserFactory (parsers) {
    let converter = MarkdownIt()
    parsers.forEach(parser => {
        converter = converter.use(parser)
    })
    return content => converter.render(content)
}

export { contentParserFactory }
