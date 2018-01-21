import 'highlight.js/styles/tomorrow.css'
import Highlight from './Highlight'
import escapeHtml from 'escape-html'

export function MarkdownParser (code, stringMap) {
    let marked = require('marked')

    let renderer = new marked.Renderer()

    renderer.heading = function (text, level) {
        return '<h' + level + '>' + text + '</h' + level + '>'
    }

    let highlight = function (code) {
        return Highlight.highlightAuto(code).value
    }

    renderer.code = function (code, lang) {
        stringMap.forEach(function (mapItem) {
            code = code.replace(mapItem.hash, mapItem.segment)
        })

        let out = highlight(code, lang)
        if (out !== null) {
            code = out
        }

        if (!lang) {
            return '<pre><code class="mp-code ">' +
                code +
                '\n</code></pre>'
        }

        return '<pre><code class="mp-code ' +
            'lang-' +
            escapeHtml(lang) +
            '">' +
            code +
            '\n</code></pre>\n'
    }

    marked.setOptions({
        renderer: renderer
    })
    return marked(code)
}
