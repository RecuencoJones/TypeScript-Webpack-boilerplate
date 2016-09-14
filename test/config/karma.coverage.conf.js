module.exports = function(config) {
  require('./karma.conf')(config);

  config.set({
    preprocessors: {
      'test/specs/unit/**/*.spec.ts': ['webpack', 'coverage']
    },
    reporters: ['dots', 'coverage'],
    coverageReporter: {
      dir: 'test/results/tmp',
      reporters: [
        {
          type: 'json',
          subdir: 'json',
          file: 'coverage.json'
        }, {
          type: 'lcov',
          subdir: 'lcov'
        }
      ]
    }
  });
};
