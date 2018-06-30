import Editor from './components/MarkdownPalettes.vue'

import { contentParserFactory } from './components/ContentParserFactory'
import { defaultConfig } from './components/DefaultConfig'

export default Editor

const defaultContentParser = contentParserFactory(defaultConfig.parsers)

export { Editor, defaultContentParser }
