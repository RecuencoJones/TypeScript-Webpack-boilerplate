module.exports = function(config) {
  var webpackConfig = require('../../webpack.config.test');

  config.set({
    basePath: '../../',
    autoWatch: true,
    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'chai-sinon',
      'source-map-support'
    ],
    files: [
      'node_modules/lodash/lodash.min.js',
      'node_modules/sinon/pkg/sinon.js',
      'node_modules/sinon-chai/lib/sinon-chai.js',
      'test/config/mocha-globals.js',
      'test/**/*.spec.ts'
    ],
    exclude: [],
    plugins: [
      'karma-*'
    ],
    preprocessors: {
      'test/specs/unit/**/*.spec.ts': ['webpack']
    },
    webpack: webpackConfig,
    reporter: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_ERROR,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
