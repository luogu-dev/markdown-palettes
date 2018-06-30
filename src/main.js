import Vue from 'vue'
import Editor from './components/MarkdownPalettes.vue'
import { getConfig } from './components/DefaultConfig'
import { contentParserFactory } from './components/ContentParserFactory'

Vue.config.productionTip = false

class MarkdownPalettes {
    constructor (el, config = {}) {
        this.config = config
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
                        value: vm.code,
                        config: this.config
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
    getContentParaser () {
        return contentParserFactory(getConfig(this.config).parsers)
    }
}

window.MarkdownPalettes = MarkdownPalettes
