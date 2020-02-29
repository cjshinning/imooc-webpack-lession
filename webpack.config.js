const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


// 写入babelrc里后不需要再配置options
// options: {
// 编写业务代码使用presets
// 'presets': [['@babel/preset-env', {
//     "targets": {
//         "chrome": "67",
//     },
//     'useBuiltIns': 'usage'
// }]]
// 编写类库时使用runtime
// "plugins": [[
//     "@babel/plugin-transform-runtime",
//     {
//       "corejs": 2,
//       "helpers": true,
//       "regenerator": true,
//       "useESModules": false
//     }
//   ]]
// }

module.exports = {
    mode: 'development',
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
        overlay: true,
        open: true,
        hot: true,
        hotOnly: true,
        historyApiFallback: true,
        proxy: {
            '/react/api': {
                target: 'http://www.dell-lee.com',
                secure: false,
                pathRewrite: {
                    'header.json' : 'demo.json'
                },
                changeOrigin: true,
                headers: {
                    host: 'www.dell-lee.com',
                    cookie: 'sbdds'
                }
            }
        }
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: ['babel-loader', {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
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
    ]
}