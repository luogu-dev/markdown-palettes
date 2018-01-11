import "highlight.js/styles/atom-one-light.css"

export function MarkdownParser(code) {
    let marked = require('marked');
    marked.setOptions({
        highlight: function (code) {
            return require('highlight.js').highlightAuto(code).value;
        }
    });
    return marked(code);
}

