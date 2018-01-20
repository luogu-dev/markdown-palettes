import Vue from 'vue'
import Editor from './components/MarkdownPalettes.vue'

Vue.config.productionTip = false

class MarkdownPalettes {
    constructor (el) {
        this.editor = new Vue({
            el: el,
            data () {
                return {
                    code: ''
                }
            },
            render (createElement) {
                const vm = this
                return createElement(Editor, {
                    props: {
                        value: vm.code
                    },
                    on: {
                        input (event) {
                            vm.code = event
                        }
                    }
                })
            },
            methods: {
                setCode (code) {
                    this.code = code
                },
                getCode () {
                    return this.code
                }
            }
        })
    }
}

window.MarkdownPalettes = MarkdownPalettes
