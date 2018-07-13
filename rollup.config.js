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
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        'transform-vue-jsx',
        'lodash'
    ]
}

export default [
    // ES6 module without resolve
    {
        input: 'src/module.js',
        output: {
            file: 'dist/MarkdownPalettes.esm.js',
            format: 'es'
        },
        plugins: [
            vue(),
            babel(Object.assign({}, baseBabelConfig, {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            esmodules: true
                        },
                        modules: false
                    }]
                ]
            }))
        ]
    },
    // Browser without Vue
    {
        input: 'src/browserModule.js',
        output: {
            file: 'dist/MarkdownPalettes.iife.js',
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
            babel(Object.assign({}, baseBabelConfig, {
                presets: [
                    ['modern-browsers', {
                        modules: false,
                        es2018: false,
                        shippedProposals: false,
                        edge: true
                    }]
                ]
            })),
            cjs(),
            json()
        ]
    }
]
