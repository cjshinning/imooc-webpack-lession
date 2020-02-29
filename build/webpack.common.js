const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            child: path.resolve(__dirname, '../src/a/b/c/child')
        }
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }), 
        new CleanWebpackPlugin(),
    ],
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
}