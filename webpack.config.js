/*eslint-disable no-unused-vars*/
const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
});

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.jsx',
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      { 
        test: /\.css$/,
        loaders: ['style-loader','css-loader'] 
      },
    ]
  },
  target: 'web',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.resolve(`${__dirname}/dist`),
    filename: 'bundle.js'
  },
  plugins: [ HtmlWebpackPluginConfig ] 

};