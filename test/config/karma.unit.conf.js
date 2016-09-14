module.exports = function(config) {
  require('./karma.conf')(config);

  config.set({
    reports: ['dots', 'junit'],
    junitReporter: {
      outputFile: 'test/results/unit/test-results.xml'
    }
  });
};
