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
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },

  plugins: [
    //new webpack.HotModuleReplacementPlugin()
  ]
})