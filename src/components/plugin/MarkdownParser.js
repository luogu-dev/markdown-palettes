import 'highlight.js/styles/tomorrow.css'
import 'katex/dist/katex.css'
import Highlight from './Highlight'
import escapeHtml from 'escape-html'
import katex from 'katex/dist/katex'

export function MarkdownParser (code, stringMap) {
    const marked = require('marked')

    const renderer = new marked.Renderer()

    renderer.heading = function (text, level) {
        return '<h' + level + '>' + text + '</h' + level + '>'
    }

    const highlight = function (code) {
        return Highlight.highlightAuto(code).value
    }

    renderer.code = function (code, lang) {
        stringMap.forEach(function (mapItem) {
            code = code.replace(mapItem.hash, mapItem.segment)
        })

        if (lang === 'latex') {
            try {
                return katex.renderToString(code, {
                    displayMode: true
                })
            } catch (exception) {
                return code
            }
        }

        const out = highlight(code, lang)
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
        renderer: renderer,
        sanitize: true
    })
    return marked(code)
}
