// nodejs 中的path模块
var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: {
        app: './src/main.js'
    },
    // 输出配置
    output: {
        // 输出路径是myProject/dist/static
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].[hash].js'
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
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: 'assets/',
                    outputPath: 'fonts' 
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                    publicPath: 'assets/',
                    outputPath: 'fonts' 
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '哈哈哈',
            filename: './index.html',
            template: path.resolve(__dirname, '../index.html'),
            inject: true
        })
    ]
}