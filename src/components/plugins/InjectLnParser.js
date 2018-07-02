export default mdHtml => {
    function injectLineNumbers(tokens, idx, options, env, slf) {
        let line;
        if (tokens[idx].map && tokens[idx].level === 0) {
            line = tokens[idx].map[0];
            tokens[idx].attrSet('data-line', String(line));
        }
        return slf.renderToken(tokens, idx, options, env, slf);
    }

    mdHtml.renderer.rules.paragraph_open = mdHtml.renderer.rules.heading_open = injectLineNumbers;
}
