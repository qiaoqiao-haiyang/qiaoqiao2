const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode:'development',
    // 入口文件配置项
    entry:{
        'index':'./src/index.js'
    },
    // 出口文件配置项
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'[name].js'
    },
    module:{},
    //插件
    plugins:[
        new HtmlWebpackPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            hash:true,
            template:'./src/index.html'
        })
    ],
    //服务与热更新
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'127.0.0.1',
        compress:true,
        port:8081,
        
    }
}