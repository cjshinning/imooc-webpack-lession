const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
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
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        })
    ],
    optimization: {
        minimizer: [new OptimizeCSSAssetsPlugin({})],
    },
}

module.exports = merge(commonConfig, prodConfig);