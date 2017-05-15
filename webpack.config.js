/*eslint-disable no-unused-vars*/
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './index.jsx',
  
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  target: 'web',
  resolve: {
    extensions: ['.js']
  },
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },

};