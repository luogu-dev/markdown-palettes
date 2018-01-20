import { MarkdownParser } from './plugin/MarkdownParser'

export function ContentParser (content, parsers) {
    let md5 = require('md5')

    let newContent = content
    let stringMap = []

    parsers.forEach(function (parserConfig) {
        let segments = newContent.match(parserConfig.reg)

        if (segments) {
            segments.forEach(function (segment) {
                let mapItem = {
                    hash: '$' + md5(segment) + '$',
                    segment: segment,
                    content: parserConfig.parser(segment)
                }
                newContent = newContent.replace(segment, mapItem.hash)
                stringMap.push(mapItem)
            })
        }
    })

    newContent = MarkdownParser(newContent, stringMap)

    stringMap.forEach(function (mapItem) {
        newContent = newContent.replace(mapItem.hash, mapItem.content)
    })

    return newContent
}
