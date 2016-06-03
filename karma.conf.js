// karma.conf.js
module.exports = function(config) {
  config.set({
    files: [
      //JASMINE,
      //JASMINE_ADAPTER,
      'jasmine/jasmine-standalone-2.4.1/src/*js',
      'jasmine/jasmine-standalone-2.4.1/spec/*Spec.js'
    ],
    browsers: ['Chrome'],
    // coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'jasmine/jasmine-standalone-2.4.1/src/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    }
  });
};