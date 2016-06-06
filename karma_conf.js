// karma_conf.js
module.exports = function (config) {
    config.set({
        frameworks: ['jasmine'],
        files: [
            //JASMINE,
            //JASMINE_ADAPTER,
            //{pattern: 'test/app.html', served: false, watched: false},
            'test/spec/*.js',
            'test/src/*.js'
        ],

        // coverage reporter generates the coverage
        //reporters: ['progress'],
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            //'test/src/*.js': 'coverage'
            'test/src/List.js': 'coverage'
            //,'test/src/Core.js': 'coverage'

        },
        plugins: [
            'karma-coverage',
            'karma-jasmine',
            'karma-chrome-launcher'
            //'karma-firefox-launcher'
        ],
        browsers: ['Chrome'],
        // optionally, configure the reporter
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
            //watermarks: {
            //    statements: [10, 75],
            //    functions: [50, 75],
            //    branches: [50, 75],
            //    lines: [50, 75]
            //}
        }
    });
};