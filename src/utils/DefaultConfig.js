// import parsers
import MarkdownItV from 'markdown-it-v'
import MarkdownItVCodemirrorHighlighter from 'markdown-it-v-codemirror-highlighter/dist/browserIndex.common.js'
import MarkdownItVKatex from '../FixedMarkdownItVKatex'

// import styles
import 'katex/dist/katex.css'

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
        lineWrapping: true,
        indentUnit: 4,
        tabSize: 4,

        extraKeys: {
            // To standardize the indentation
            Tab: (cm) => {
                if (cm.somethingSelected()) {
                    cm.execCommand("indentMore");
                }
                else {
                    cm.execCommand("insertSoftTab");
                }
            }
        }
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
