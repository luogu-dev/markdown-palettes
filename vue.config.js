module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        output: {
            globalObject: `(typeof self !== 'undefined' ? self : this)`,
            libraryExport: 'default'
        }
    },
    transpileDependencies: [
        'markdown-it-v'
    ],
    productionSourceMap: false
}
