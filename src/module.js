import Editor from './MarkdownPalettes.vue'

import { contentParserFactory } from './parsers/ContentParserFactory'
import { defaultConfig } from './utils/DefaultConfig'

export default Editor

const parser = contentParserFactory(defaultConfig.parsers)
const defaultContentParser = (md) => (parser(md).toHTML())

export { Editor, defaultContentParser, defaultConfig }
