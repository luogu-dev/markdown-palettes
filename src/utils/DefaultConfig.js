// import parsers
import MarkdownItV from 'markdown-it-v'
import MarkdownItVCodemirrorHighlighter from 'markdown-it-v-codemirror-highlighter/dist/browserIndex.common.js'
import MarkdownItVKatex from 'markdown-it-v-katex'

// import styles
import 'katex/dist/katex.css'

// import builtin languages
import 'codemirror/mode/clike/clike'
import 'codemirror/mode/css/css'
import 'codemirror/mode/htmlmixed/htmlmixed'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/pascal/pascal'
import 'codemirror/mode/php/php'
import 'codemirror/mode/python/python'

// import toolbar buttons
import { defaultBtns, defaultSimpleBtns, getBtns } from '../components/ToolBarBtns/toolbarBtn'

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
        MarkdownItV,
        MarkdownItVCodemirrorHighlighter,
        MarkdownItVKatex
    ],
    toolbarConfig: defaultBtns,
    bigScreenToolbarConfig: defaultBtns,
    smallScreenToolbarConfig: defaultSimpleBtns,
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
