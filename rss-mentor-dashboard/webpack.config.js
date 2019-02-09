const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundler.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ],
  },  
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new ExtractTextPlugin('style.css')
  ],
  devServer : {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}