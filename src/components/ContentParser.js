import { MarkdownParser } from './plugin/MarkdownParser'

export function ContentParser (content, parsers) {
    let md5 = require('md5')

    let newContent = content
    let stringMap = []

    parsers.forEach(function (parserConfig) {
        let matches = newContent.match(parserConfig.reg)

        while (matches !== null) {
            let mapItem = {
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
