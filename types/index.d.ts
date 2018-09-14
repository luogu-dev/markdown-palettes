import { Component } from 'vue'
import { contentParserFactory } from '../src/parsers/ContentParserFactory'
import { defaultConfig } from '../src/utils/DefaultConfig'

declare const Editor: Component
declare const defaultContentParser

export default Editor

export { Editor, defaultContentParser }
