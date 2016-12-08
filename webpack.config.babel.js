const { resolve } = require('path')
const validator = require('webpack-validator')
const { getIfUtils } = require('webpack-config-utils')
const webpack = require('webpack')

module.exports = env => {
  const { ifProd } = getIfUtils(env)

  const config = {
    context: resolve('src'),
    entry: './app',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/'
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      loaders: [
        { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ },
        { test: /\.styl$/, loaders: ['style-loader', 'css-loader?-minimize', 'postcss-loader', 'stylus-loader'] }
      ]
    }
  }

  return validator(config)
}
