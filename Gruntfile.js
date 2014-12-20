/*
 * grunt-goog-webfont-dl
 * https://github.com/optimalisatie/grunt-goog-webfont-dl
 *
 * Copyright (c) 2014 Jan Jaap Hakvoort / info@optimalisatie.nl
 * Licensed under the MIT license.
 */
/*global require:true*/
/*global __dirname:true*/
var path = require( 'path' );
module.exports = function(grunt) {
    'use strict';

// Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc',
            },
        },
// Before generating any new files, remove any previously-created files.
        clean: {
            tmp: ['tmp/*'],
        },
// Configuration to be run (and then tested).
        'goog-webfont-dl': {
            test: {
                options: {
                    ttf: true,
                    eot: true,
                    woff: true,
                    svg: true,
                    fontname: 'Ubuntu',
                    fontstyles: '300,500,700',
                    cssdest: 'tmp/ubuntu.css',
                    cssprefix: ''
                }
            }
        },
// Unit tests.
        nodeunit: {
            tests: ['test/*_test.js'],
        },
    });
// Actually load this plugin's task(s).
    grunt.loadTasks('tasks');
// These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
// Whenever the "test" task is run, first clean the "tmp" dir, then run this
// plugin's task(s), then test the result.
    grunt.registerTask('test', ['clean', 'goog-webfont-dl', 'nodeunit']);
// By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);
};