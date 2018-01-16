import 'katex/dist/katex.css'
import katex from 'katex/dist/katex'

export default {
  reg: RegExp(/(\$+[^$]*\$+)/, 'g'),
  parser (segment) {
    let matchReg = new RegExp(/^\$+(.*)\$+$/)
    let matched = segment.match(matchReg)

    if (matched) {
      segment = matched[1]
      try {
        return katex.renderToString(segment)
      } catch (exception) {
        return '$' + segment + '$'
      }
    } else {
      return ''
    }
  }
}
