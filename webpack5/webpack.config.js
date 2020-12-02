const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports={
    mode:"development",
    //入口文件配置项
    entry:{
        'index':'./src/index.js'
    },
    //出口文件配置项
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    //模块：例如解读css,图片如何转换，压缩
    module:{
        rules:[
            {
                test:/\.css$/,
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            }
        ]
    },
    //插件，用于生产模板和各项功能
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            //是要打包的html模板路径和文件名称
            template:"./src/index.html",
            //为了开发中js有缓存效果，所以加入hash，这样可以有效避免缓存js
            hash:true,
            minify:{
                //去掉属性的双引号
                removeAttributeQuotes:true
            }
        }),
        new ExtractTextPlugin("css/main.css")
    ],
    //配置webpack开发服务功能
    devServer:{
        //设置基本目录结构
        contentBase:path.resolve(__dirname,'dist'),
        //服务器的IP地址,可以使用IP也可以使用localhost
        host:"127.0.0.2",
        //服务器压缩是否开启
        compress:true,
        //配置服务器端口号
        port:'8081',
        open:true,
        hot:true
    }

};