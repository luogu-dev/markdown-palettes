import 'highlight.js/styles/atom-one-light.css'
import Highlight from './Highlight'

export function MarkdownParser (code, stringMap) {
    let marked = require('marked')

    let renderer = new marked.Renderer()

    renderer.heading = function (text, level) {
        return '<h' + level + '>' + text + '</h' + level + '>'
    }

    let highlight = function (code) {
        return Highlight.highlightAuto(code).value
    }

    renderer.code = function (code, lang, escaped) {
        stringMap.forEach(function (mapItem) {
            code = code.replace(mapItem.hash, mapItem.segment)
        })

        let out = highlight(code, lang)
        if (out != null && out !== code) {
            escaped = true
            code = out
        }

        if (!lang) {
            return '<pre><code>' +
                (escaped ? code : escape(code, true)) +
                '\n</code></pre>'
        }

        return '<pre><code class="' +
            'lang-' +
            escape(lang, true) +
            '">' +
            (escaped ? code : escape(code, true)) +
            '\n</code></pre>\n'
    }

    marked.setOptions({
        renderer: renderer
    })
    return marked(code)
}
