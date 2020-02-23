const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true
    },
    module: {
        rules: [
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
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = merge(commonConfig, devConfig);