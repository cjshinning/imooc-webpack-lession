const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const AddAssetWebpackHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const makePlugins = (configs) => {
    const plugins = [
        new CleanWebpackPlugin()
    ];

    Object.keys(configs.entry).forEach(item => {
        plugins.push(
            new HtmlWebpackPlugin({
                template: './src/index.html',
                filename: `${item}.html`,
                chunks: ['vendors', item]
            }), 
        )
    })
        
    const files = fs.readdirSync(path.resolve(__dirname, '../dll'));
    files.forEach(file => {
        if(/.*\.dll.js/.test(file)) {
            plugins.push(new AddAssetWebpackHtmlPlugin({
                filepath: path.resolve(__dirname, '../dll', file)
            }));
        }
        if(/.*\.manifest.json/.test(file)) {
            plugins.push(new webpack.DllReferencePlugin({
                manifest: path.resolve(__dirname, '../dll', file)
            }));
        }
    })

    return plugins;
}

const configs = {
    entry: {
        index: './src/index.js',
        list: './src/list.js',
        detail: './src/detail.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                include: path.resolve(__dirname, '../src'), 
                use: [{
                    loader:  'babel-loader'
                }]
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
    performance: false,
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    name: 'vendors'
                }
            }
        }
    }
};

configs.plugins = makePlugins(configs);

module.exports = configs;