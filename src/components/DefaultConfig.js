import KatexParser from '@luogu-dev/markdown-it-katex'
import 'katex/dist/katex.css'
import HighlightjsParser from './plugins/HighlightjsParser'
import 'highlight.js/styles/tomorrow.css'
import { defaultBtns, getBtns } from './toolbar-button/toolbarBtn'
import _ from 'lodash'

function mixin (dest, src) {
    for (const [key, value] of Object.entries(src)) {
        if (typeof dest[key] === 'object' && !Array.isArray(dest[key])) {
            mixin(dest[key], value)
        } else {
            dest[key] = value
        }
    }
    return dest
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
        mode: 'gfm',
        lineNumbers: true,
        lineWrapping: true
    },
    scrollSync: true
}

export function getConfig (config) {
    const mergedConfig = mixin(_.cloneDeep(defaultConfig), config)
    const processedConfig = {}
    for (const key of Object.keys(defaultConfig)) {
        processedConfig[key] = mergedConfig[key]
    }
    processedConfig.toolbarConfig = getBtns(processedConfig.toolbarConfig)
    return processedConfig
}
