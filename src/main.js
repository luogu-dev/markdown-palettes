import Vue from 'vue'
import Editor from './module.js'

// register languages for hljs
import hljs from 'highlight.js/lib/highlight'
import cpp from 'highlight.js/lib/languages/cpp'
hljs.registerLanguage('cpp', cpp)

// register languages for CodeMirror
import 'codemirror/mode/clike/clike'

// eslint-disable-next-line
const app = new Vue({
    el: '#editor',
    render: h => h(Editor)
})
