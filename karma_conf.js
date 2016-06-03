// karma.conf.js
module.exports = function(config) {
    config.set({
        files: [
            //JASMINE,
            //JASMINE_ADAPTER,
            'test/src/*.js',
            'test/spec/*.js'
        ],
        //plugins:[
        //    //'karma-jasmine',
        //    'karma-coverage'
        //],
        browsers : ['Chrome'],
        // coverage reporter generates the coverage
        reporters: ['progress', 'coverage'],

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'test/src/*.js': 'coverage'
        },

        // optionally, configure the reporter
        coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }
    });
};