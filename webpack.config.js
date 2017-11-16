const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './app/app.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  // 开启webpack dev server
  devServer: {
    contentBase: './dist',
    hot: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'
        }, {
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.jsx$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: path.resolve(__dirname, './app'),
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          }
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg)$/,
        loader: 'url-loader?name=[hash:8].[name].[ext]', // url-loader?limit=10000
        query: {
          limit: 10 * 1024 // 10KB
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'teambition'
    })
  ]
};
