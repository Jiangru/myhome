// nodejs 中的path模块
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var cleanWebpackPlugin = require('clean-webpack-plugin')

function resolve (dir) {
    console.log(__dirname, dir, 111)
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        app: './src/main.js',
        hello: './src/hello.js'
    },
    // 输出配置
    output: {
        // 输出路径是myProject/dist
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        extensions: [' ', '.js', '.vue'],
        alias: {
            'Vue': 'vue/dist/vue.js',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {   // 使用vue-loader加载.vue结尾的文件
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ // 排除node_modules文件夹
            },
            {
                test: /\.less$/,
                // 多个loader可以用在同一个文件上并且被链式调用，链式调用时从右到左执行且loader之间用"!"来分割
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[path][name].[ext]',
                    publicPath: '/'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: '[path][name].[ext]',
                    publicPath: '/'
                }
            }
        ]
    }
}