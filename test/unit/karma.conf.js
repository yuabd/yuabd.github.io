'use strict'

var webpackConfig = require('../../webpack.config')

// use inline sourcemap for karma-sourcemap-loader
webpackConfig.devtool = '#inline-source-map'

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    reporters: ['spec'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      quiet: true
    },
    singleRun: true
  })
}
