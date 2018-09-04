const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/src/app/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
    publicPath: '/'
  },
  mode: 'development',
  module: {
      rules: [
        { //es6 compiler
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        },
        { //SASS compiler
          test: /\.(sass|scss)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            "css-loader",
            "sass-loader"
          ]
        }
      ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
      }),
      new HtmlWebpackPlugin({
        template: __dirname + "/src/public/index.html",
        inject: 'body'
      })
  ],
  devServer: { //Webpack Sever
      contentBase: './src/public',
      port: 7700,
      stats: 'minimal'
  } 
};