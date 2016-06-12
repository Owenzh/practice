// karma_ut.js -- this config file is used for UnitTest Project
module.exports = function (config) {
    config.set({
        basePath:'./',
        frameworks: ['jasmine'],
        files: [
            ,'lib/angular.min.js'
            ,'lib/angular-route.min.js'
            ,'lib/angular-mocks.js'
            ,'app/client/src/js/app.js'
            ,'app/client/src/js/filters/vpAlarmStateDisplayFilter.js'
            ,'unit_test/spec/vpAlarmStateDisplayFilterSpec.js'
            ,'unit_test/src/Core.js'
            ,'unit_test/spec/CoreSpec.js'
        ],
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],
        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'app/client/src/js/filters/vpAlarmStateDisplayFilter.js': 'coverage'
            ,'unit_test/src/Core.js':'coverage'
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
            dir: 'coverage_ut'
            //watermarks: {
            //    statements: [10, 75],
            //    functions: [50, 75],
            //    branches: [50, 75],
            //    lines: [50, 75]
            //}
        }
    });
};