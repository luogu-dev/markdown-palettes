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
            presets: [
                ['@babel/preset-env', {
                    modules: false,
                    targets: {
                        esmodules: true
                    }
                }],
                '@babel/preset-stage-3'
            ],
            plugins: [
                'transform-vue-jsx',
                'lodash'
            ]
        })
    ]
}
