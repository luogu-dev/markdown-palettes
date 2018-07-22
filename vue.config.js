const IgnorePlugin = require('webpack').IgnorePlugin
const NodeExternals = require('webpack-node-externals')

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
        ],
        externals: [NodeExternals()]
    },
    productionSourceMap: false
}
