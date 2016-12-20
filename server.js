const { resolve } = require('path');
const browserSync = require('browser-sync').create();
const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const bundler = webpack(webpackConfig);

browserSync.init({
  open: false,

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
      // webpackHotMiddleware(bundler)
    ]
  },

  files: [
    'src/*.html'
  ]

});
