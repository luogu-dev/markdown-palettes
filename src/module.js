import Editor from './MarkdownPalettes.vue'

import { contentParserFactory } from './parsers/ContentParserFactory'
import { defaultConfig } from './utils/DefaultConfig'

export default Editor

const defaultContentParser = contentParserFactory(defaultConfig.parsers)

export { Editor, defaultContentParser }
