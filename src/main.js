import Vue from 'vue'
import { Editor, defaultContentParser } from './module.js'

// eslint-disable-next-line
const app = new Vue({
    el: '#editor',
    functional: true,
    render: h => h(Editor)
})

window.defaultContentParser = defaultContentParser
