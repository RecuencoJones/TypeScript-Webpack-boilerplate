module.exports = {
  output: {
    path: './dist/',
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: {
    lodash: {
      root: '_',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash'
    }
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  devtool: 'inline-source-map',
  ts: {
    compilerOptions: {
      declaration: false
    }
  }
};
