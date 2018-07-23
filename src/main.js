import Vue from 'vue'
import Editor from './module.js'

// eslint-disable-next-line
const app = new Vue({
    el: '#editor',
    functional: true,
    render: h => h(Editor)
})
