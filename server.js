const { resolve } = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const { getIfUtils } = require('webpack-config-utils')
const webpackConfig = require('./webpack.config')('dev');
const bundler = webpack(webpackConfig);
const bs = require('browser-sync').create();

bs.init({
  open: false,
  port: 8080,

  server: {
    baseDir: resolve(__dirname, 'dist'),
    middleware: [
      webpackDevMiddleware(bundler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
          chunks: false,
          colors: true,
        }
      }),
      webpackHotMiddleware(bundler)
    ]
  },

  files: [
    'src/css/**',
    'src/*.html'
  ]

});
