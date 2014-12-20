/*
 * grunt-mocha-phantomjs
 * https://github.com/jdcataldo/grunt-mocha-phantomjs
 *
 * Copyright (c) 2013 Justin Cataldo
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
    var _       = require('lodash');

    grunt.registerMultiTask('goog-webfont-dl', 'test.', function() {
        // Merge options
        var options        = this.options({
            reporter: 'spec',
            // Non file urls to test
            urls: []
        });

            var phantomjs = grunt.util.spawn({
                cmd: 'node_modules/goog-webfont-dl/index.js'
            }, function(error, result, code) {
                grunt.log.write(result);
            });


    });

};
