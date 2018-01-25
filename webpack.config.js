const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    entry: ['./src/main.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'markdown-palettes.js',
        publicPath: './'
    },
    plugins: [
        new LodashModuleReplacementPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new ExtractTextPlugin('markdown-palettes.css'),
        new CleanWebpackPlugin(['dist'])
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    },
                    extractCSS: true
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                    fallback: 'vue-style-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        publicPath: '/dist/'
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.BUNDLE_ANALYZE === 'true') {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new BundleAnalyzerPlugin()
    ])
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}