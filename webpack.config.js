const webpack = require('webpack');
const {resolve} = require('path');
const validator = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {getIfUtils} = require('webpack-config-utils')

module.exports = (env) => {
  const { ifProd } = getIfUtils(env);

  const config = {
    context: resolve('src'),

    entry: {
      vendor: [
        'react', 'react-dom'
      ],
      app: ['./app']
    },

    output: {
      path: resolve('dist'),
      filename: '[name].[chunkhash].js',
      publicPath: '/'
    },

    devtool: ifProd('source-map', 'eval'),

    resolve: {
      extensions: ['.json', '.js', '.jsx']
    },

    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: ['babel-loader']
        }, {
          test: /\.styl$/,
          loader: ['style-loader', 'css-loader?-minimize', 'postcss-loader', 'stylus-loader']
        }
      ]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
      new HtmlWebpackPlugin({template: './index.html', inject: true}),
      new webpack.NoErrorsPlugin()
    ]
  }

  return config;
};
