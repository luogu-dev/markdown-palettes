import vue from 'rollup-plugin-vue'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import cjs from 'rollup-plugin-commonjs'
import postcss from 'rollup-plugin-postcss'
import json from 'rollup-plugin-json'

const baseBabelConfig = {
    babelrc: false,
    exclude: 'node_modules/**',
    plugins: [
        'transform-vue-jsx',
        'lodash'
    ],
    presets: [
        '@babel/preset-stage-3'
    ]
}
Object.freeze(baseBabelConfig.plugins)
Object.freeze(baseBabelConfig.presets)
Object.freeze(baseBabelConfig)
function genBabelConfig (presets = [], plugins = []) {
    return Object.assign({}, baseBabelConfig, {
        plugins: [...baseBabelConfig.plugins, ...plugins],
        presets: [...baseBabelConfig.presets, ...presets]
    })
}
function myBabel (presets = [], plugins = []) {
    return babel(genBabelConfig(presets, plugins))
}

export default [
    // ES6 module without resolve
    {
        input: 'src/module.js',
        output: {
            file: 'dist/esm/MarkdownPalettes.js',
            format: 'es'
        },
        plugins: [
            vue(),
            myBabel([
                ['@babel/preset-env', {
                    modules: false,
                    targets: {
                        esmodules: true
                    }
                }]
            ])
        ]
    },
    // Browser without Vue
    {
        input: 'src/browserModule.js',
        output: {
            file: 'dist/iife/MarkdownPalettes.js',
            format: 'iife',
            name: 'MarkdownPalettes',
            exports: 'default'
        },
        plugins: [
            resolve({
                module: true,
                jsnext: true,
                main: true,
                preferBuiltins: false
            }),
            vue(),
            postcss(),
            myBabel([
                ['modern-browsers', {
                    modules: false
                }]
            ]),
            cjs(),
            json()
        ]
    }
]
