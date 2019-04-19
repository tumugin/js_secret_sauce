'use strict'

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const utils = require('./utils')
const rm = require('rimraf')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

//define default public URL
// const publicUrl = 'http://exmaple.com';
const publicUrl = '.';
if(process.env.PUBLIC_URL === undefined) process.env.PUBLIC_URL = publicUrl

//delete dist files
rm.sync(resolve('dist'))
rm.sync(resolve('prod'))

module.exports = {
  output: {
    path: resolve('dist')
  },
  entry: {
    app: './src/index.tsx'
  },

  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@': resolve('src')
    }
  },

  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        loader: 'babel-loader!ts-loader',
        include: [resolve('src'), resolve('test')]
      },
      // {
      //   test: /\.(js|jsx|ts|tsx)$/,
      //   use: 'eslint-loader',
      //   enforce: 'pre'
      // },
      {
        test: [/\.js$/, /\.jsx$/],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.PUBLIC_URL': JSON.stringify(process.env.PUBLIC_URL)
    }),
    new SWPrecacheWebpackPlugin({
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      filename: 'service-worker.js',
      logger(message) {
        console.log(message);
      },
      minify: true,
      navigateFallback: process.env.PUBLIC_URL + '/index.html',
      navigateFallbackWhitelist: [/^(?!\/__).*/],
      staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: utils.resolve('static/'),
      to: utils.resolve('dist/'),
      toType: 'dir'
    }])
  ]
}
