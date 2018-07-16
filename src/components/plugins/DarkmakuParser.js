import matchAll from 'string.prototype.matchall'

export default md => {
    md.core.ruler.push('darkmaku', state => {
        for (const blkToken of state.tokens) {
            if (blkToken.type === 'inline') {
                let tokens = blkToken.children
                for (let i = tokens.length - 1; i >= 0; --i) {
                    const token = tokens[i]
                    if (token.type === 'text') {
                        const re = /\[\[(.+?)\]\]/g
                        const newTokens = []
                        let lastIndex = 0
                        let newToken
                        for (const match of matchAll(token.content, re)) {
                            if (match.index !== 0) {
                                newToken = new state.Token('text', '', 0)
                                newToken.content = token.content.slice(lastIndex, match.index)
                                newTokens.push(newToken)
                            }
                            newToken = new state.Token('darkmaku', '', 0)
                            newToken.content = match[1]
                            newTokens.push(newToken)
                            lastIndex = match.index + match[0].length
                        }
                        if (lastIndex < token.content.length) {
                            newToken = new state.Token('text', '', 0)
                            newToken.content = token.content.slice(lastIndex)
                            newTokens.push(newToken)
                        }
                        blkToken.children = tokens = md.utils.arrayReplaceAt(tokens, i, newTokens)
                    }
                }
            }
        }
    })
    md.renderer.rules.darkmaku = (tokens, idx) => {
        return `<span class="darkmaku">${tokens[idx].content}</span>`
    }
}