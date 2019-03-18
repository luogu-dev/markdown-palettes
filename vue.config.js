const webpack = require('webpack')
const IgnorePlugin = webpack.IgnorePlugin

module.exports = {
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        plugins: [
            new IgnorePlugin(/^css-tree$/),
            new webpack.optimize.LimitChunkCountPlugin({
                maxChunks: 1,
            }),
        ]
    },
    transpileDependencies: [
    ],
    productionSourceMap: false
}
