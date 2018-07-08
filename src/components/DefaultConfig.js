import KatexParser from '@luogu-dev/markdown-it-katex'
import 'katex/dist/katex.css'
import HighlightjsParser from 'markdown-it-highlightjs'
import 'highlight.js/styles/tomorrow.css'
import { defaultBtns, getBtns } from './toolbar-button/toolbarBtn'
import _ from 'lodash'

function set (obj, config) {
    for (const key in config) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            set(obj[key], config)
        }
        obj[key] = config[key]
    }
    return obj
}

export const defaultConfig = {
    previewDisplay: 'normal',
    fullScreen: false,
    parsers: [
        KatexParser,
        HighlightjsParser
    ],
    toolbarConfig: defaultBtns,
    editorOption: {
        mode: 'markdown',
        lineNumbers: true,
        lineWrapping: true
    },
    scrollSync: true
}

export function getConfig (config) {
    if (config.toolbarConfig !== undefined) { config.toolbarConfig = getBtns(config.toolbarConfig) }
    return set(_.cloneDeep(defaultConfig), config)
}
