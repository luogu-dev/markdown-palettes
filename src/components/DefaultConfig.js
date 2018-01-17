import KatexParser from './plugin/KatexParser'
import {toolbarBtn} from './toolbar-button/toolbarBtn'
import _ from 'lodash'

function set (obj, config) {
  for (let key in config) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      set(obj[key], config)
    }
    obj[key] = config[key]
  }
  return obj
}

export let defaultConfig = {
  height: '500px',
  parsers: [
    KatexParser
  ],
  toolbarConfig: toolbarBtn,
  editorOption: {
    mode: 'markdown',
    lineNumbers: true,
    lineWrapping: true
  }
}

export function getConfig (config) {
  return set(_.cloneDeep(defaultConfig), config)
}
