import Vue from 'vue'
import Editor from './module.js'

// register languages for hljs
import hljs from 'highlight.js/lib/highlight'
import cpp from 'highlight.js/lib/languages/cpp'

// register languages for CodeMirror
import 'codemirror/mode/clike/clike'

hljs.registerLanguage('cpp', cpp)

// eslint-disable-next-line
const app = new Vue({
    functional: true,
    el: '#editor',
    render: h => h(Editor)
})
