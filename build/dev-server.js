// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
// 跨平台的开启文件或者网页的工具
var opn = require('opn')

// 创建一个express实例
var app = express()

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用webpack-dev-middleware中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publickPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 使用webpack-hot-middleware中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', (compilation) => {
    compilation.plugin('html-webpack-plugin-after-emit', (data, cb) => {
        // 发布事件
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})


// 注册中间件
app.use(devMiddleware)
// 注册中间件
app.use(hotMiddleware)

var uri = 'http://localhost:8888/'

var _resolve
var readyPromise = new Promise(resolve => {
    _resolve = resolve
})

devMiddleware.waitUntilValid(() => {
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
    _resolve
})

// 监听8888端口，开启服务器
var server = app.listen(8888, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8888')
})

module.exports = {
    ready: readyPromise,
    close: () => {
        server.close()
    }
}