var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');//简单的模板

module.exports = {
	//devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项;配置这个可以方便调试
	//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
  entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件

  output: {
    path: __dirname + "/public",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  },

  module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        //把query搬入.babelrc文件中，方便管理
        // query: {
        //   presets: ['es2015','react']
        // }
      },

      {
        test: /\.css$/,
        loader: 'style!css?modules'//添加对样式表的处理，感叹号的作用在于使同一文件能够使用不同类型的loader
      		//modules可以直接把CSS的类名传递到组件的代码中
      		//!postcss可以进行css预处理，比如sass，less
      },
    ],

   //  postcss: [
   //  	require('autoprefixer')//调用autoprefixer插件
  	// ],

  	plugins: [
  		new HtmlWebpackPlugin({
        template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
      }),
  	],

  }

  // devServer: {
  //   contentBase: "./public",//本地服务器所加载的页面所在的目录
  //   colors: true,//终端中输出结果为彩色
  //   historyApiFallback: true,//不跳转
  //   inline: true//实时刷新
  // } 

}