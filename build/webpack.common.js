const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader:  'babel-loader',
            },
            {
                test: /\.(jpg|png|gif)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        // placeholder 占位符
                        name: '[name]_[hash].[ext]',
                        outputPath: 'images',
                        limit: 10240
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                use: {
                    loader: 'file-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }), 
        new CleanWebpackPlugin()
    ],
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 30000,
    //         // minRemainingSize: 0,
    //         maxSize: 30000, //50kb, lodash 1mb
    //         minChunks: 1,
    //         maxAsyncRequests: 6,
    //         maxInitialRequests: 4,
    //         automaticNameDelimiter: '~',
    //         automaticNameMaxLength: 30,
    //         cacheGroups: {
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 name: 'vendors.js'
    //             },
    //             default:  {
    //                 priority: -20,
    //                 reuseExistingChunk: true,
    //                 filename: 'common.js'
    //             }
    //         }
    //     }
    // }
}