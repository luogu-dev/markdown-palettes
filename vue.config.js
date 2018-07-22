const IgnorePlugin = require('webpack').IgnorePlugin

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
            libraryExport: 'default'
        },
        plugins: [
            new IgnorePlugin(/^css-tree$/)
        ]
    },
    productionSourceMap: false
}
