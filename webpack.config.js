var webpackConfig = require('./webpack.config.common');

webpackConfig.entry = {
  'index': './app/Index.ts'
};

webpackConfig.output.library = 'TWB';

module.exports = webpackConfig;
