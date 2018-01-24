import 'katex/dist/katex.css'
import katex from 'katex/dist/katex'

export default {
    reg: /(\$\$?)(.+?)\$\$?/,
    parser (matches) {
        let isMathMode = false
        if (matches[1] === '$$') {
            isMathMode = true
        }
        try {
            return katex.renderToString(matches[2], {
                displayMode: isMathMode
            })
        } catch (exception) {
            return matches[0]
        }
    }
}
