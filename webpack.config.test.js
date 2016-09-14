var webpackConfig = require('./webpack.config.common');

webpackConfig.devtool = 'inline-source-map';

webpackConfig.module.postLoaders = [
  {
    test: /\.tsx?$/,
    loader: 'istanbul-instrumenter',
    exclude: /test|node_modules|\.spec\.ts$/
  }
];

webpackConfig.ts = {
  compilerOptions: {
    sourceMap: false,
    inlineSourceMap: true,
    outDir: '.'
  }
};

module.exports = webpackConfig;
