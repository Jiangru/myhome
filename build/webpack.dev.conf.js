var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

// 引入基本配置
var config = require('./webpack.config')

config.output.publicPath  = '/'
config.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new HtmlWebpackPlugin({
        title: 'app',
        filename: 'index.html',
        template: path.resolve(__dirname, '../index.html'),
        chunks: ['app'],
        inject: true
    }),
    new HtmlWebpackPlugin({
        title: 'hello',
        filename: 'hello.html',
        template: path.resolve(__dirname, '../hello.html'),
        chunks: ['hello'],
        inject: true
    })
]

// 动态向入口配置中注入webpack-hot-middleware/client
var devClient = './build/dev-client'
Object.keys(config.entry).forEach((name, i) => {
    var extras = [devClient]
    config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config