// karma.conf.js
module.exports = function(config) {
  config.set({
    framework: ['jasmine'],
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter

    files: [
      'jasmine/jasmine-standalone-2.4.1/src/*js',
      'jasmine/jasmine-standalone-2.4.1/spec/*Spec.js'
    ],
    // list of files to exclude
    exclude: [
      'jasmine/jasmine-standalone-2.4.1/lib/jasmine-2.4.1/*js',
      'jasmine/jasmine-standalone-2.4.1/lib/jasmine-2.4.1/*css',
      'jasmine/jasmine-standalone-2.4.1/lib/jasmine-2.4.1/*png'
    ],
    plugins: [
      'karma-coverage'
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