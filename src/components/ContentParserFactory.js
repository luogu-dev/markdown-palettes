import MarkdownIt from 'markdown-it'

function contentParserFactory (parsers) {
    let converter = MarkdownIt()
    parsers.forEach(parser => {
        if(Array.isArray(parser))
            // if parser is Array, it contains extra arguments to pass to .use()
            converter = converter.use(...parser)
        else
            converter = converter.use(parser)
    })
    return content => converter.render(content)
}

export { contentParserFactory }
