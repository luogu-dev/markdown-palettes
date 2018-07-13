import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'

export default {
    input: 'src/module.js',
    output: {
        file: 'dist/MarkdownPalettes.esm.js',
        format: 'es'
    },
    plugins: [
        vue(),
        babel({
            babelrc: false,
            plugins: [
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-optional-chaining',
                'transform-vue-jsx',
                'lodash'
            ]
        })
    ]
}
