import { defaultContentParser, defaultConfig } from './module.js'
import Editor from './Editor'
import Vue from 'vue/dist/vue'

const MarkdownPalettes = class MarkdownPalettes {
    #vueInstance = null

    constructor(el, config = defaultConfig) {
        this.#vueInstance = new Vue({
            ...Editor,
            data () {
                return {
                    value: MarkdownPalettes.content,
                    config: config
                }
            }
        })

        this.#vueInstance.$mount(el)
    }

    get content () {
        return this.#vueInstance.$data.value
    }

    set content(value) {
        this.#vueInstance.$data.value = value
    }

    static defaultContentParser(content) {
        return defaultContentParser(content);
    }
}

window.MarkdownPalettes = MarkdownPalettes

