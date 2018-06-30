import { MarkdownParser } from './plugin/MarkdownParser'
import md5 from 'md5'

function contentParserFactory (parsers) {
    return content => {
        let newContent = content
        const stringMap = []

        parsers.forEach(function (parserConfig) {
            let matches = newContent.match(parserConfig.reg)

            while (matches !== null) {
                const mapItem = {
                    hash: md5(matches[0]),
                    segment: matches[0],
                    content: parserConfig.parser(matches)
                }
                newContent = newContent.replace(mapItem.segment, mapItem.hash)
                stringMap.push(mapItem)

                matches = newContent.match(parserConfig.reg)
            }
        })

        newContent = MarkdownParser(newContent, stringMap)

        stringMap.forEach(function (mapItem) {
            newContent = newContent.replace(mapItem.hash, mapItem.content)
        })
        return newContent
    }
}

export { contentParserFactory }
