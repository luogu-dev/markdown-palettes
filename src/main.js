import Vue from 'vue'
import Editor from './module.js'

// eslint-disable-next-line
const app = new Vue({
    el: '#editor',
    render: h => h(Editor)
})
