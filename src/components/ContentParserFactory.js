import { MarkdownParser } from './plugin/MarkdownParser'

function contentParserFactory (parsers) {
    return content => {
        return MarkdownParser(content, parsers)
    }
}

export { contentParserFactory }
