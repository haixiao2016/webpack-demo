const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
  mode: "development",
  entry: {
    build: './src/js/ceshi.js'
  },
  output: {
    filename: 'index.js',
    path: __dirname + '/dist'
  },
  devServer: {
    contentBase: '/dist',
    port: 8080,
    historyApiFallback: true,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',   
        },
        exclude: /node_modules/
      },{
        test: /\.less$/,
        loaders:['style-loader','css-loader','less-loader','postcss-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: __dirname + "/index.html"
    })
  ]
}