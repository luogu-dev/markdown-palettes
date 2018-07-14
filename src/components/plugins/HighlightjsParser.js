import hljs from 'highlight.js/lib/highlight'

export default md => {
    const highlighter = (code, lang) => {
        if (lang) {
            try {
                return hljs.highlight(lang, code).value
            } catch(e) {}
        } else {
            try {
                return hljs.highlightAuto(code).value
            } catch(e) {}
        }
        return md.utils.escapeHtml(code)
    }
    md.options.highlight = (code, lang) => `<pre><code>${highlighter(code, lang)}</code></pre>`
}
