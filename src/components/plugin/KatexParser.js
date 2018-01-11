import "katex/dist/katex.css"
import katex from "katex/dist/katex"

export default {
    reg: RegExp(/(\$+[^$]*\$+)/, 'g'),
    parser: function (segment) {
        let matchReg = new RegExp(/^\$+(.*)\$+$/)
        segment = segment.match(matchReg)[1]
        return katex.renderToString(segment)
    }
}