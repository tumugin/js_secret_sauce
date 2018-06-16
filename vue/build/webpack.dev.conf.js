'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.conf.js')

const HOST = 'localhost'
const PORT = 8080

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',

  serve: {
    LogLevel: 'warn',
    hot: true,
    content: 'dist',
    //compress: true,
    host: HOST,
    port: PORT,
    open: true,
    //overlay: { warnings: false, errors: true },
    //publicPath: '/',
    //quiet: true,
    //watchOptions: {
    //  poll: true
    //}
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'stylus-loader'
        ]
      }
    ]
  },

  plugins: [
    //new webpack.HotModuleReplacementPlugin()
  ],
  
  optimization: {
    namedModules: true,
    noEmitOnErrors: true,
  }
})