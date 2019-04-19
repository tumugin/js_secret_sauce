'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader'
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
          'stylus-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    //new webpack.HotModuleReplacementPlugin()
  ]
})
