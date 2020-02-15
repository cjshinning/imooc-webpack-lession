const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    // 开发环境 cheap-module-eval-source-map
    // 线上环境 cheap-module-source-map
    devtool: 'cheap-module-eval-source-map',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true,
        hotOnly: true
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
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',
                    {
                      loader: 'css-loader',
                      options: {
                        importLoaders: 2
                      }
                    },
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }), 
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    // optimization: {
    //     usedExports: true
    // }
}