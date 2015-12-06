/*
 * grunt-goog-webfont-dl
 * https://github.com/optimalisatie/grunt-goog-webfont-dl
 *
 * Copyright (c) 2014 Jan Jaap Hakvoort / info@optimalisatie.nl
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    var _ = require('lodash');
    var path = require('path');

    grunt.registerMultiTask('goog-webfont-dl', 'Grunt wrapper for goog-webfont-dl (Google WebFont Downloader)', function() {
        var done = this.async();
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
            ttf: true,
            eot: true,
            woff: true,
            woff2: true,
            svg: true,
            fontname: '',
            fontstyles: '',
            fontdest: '',
            cssdest: '',
            cssprefix: '',
            subset: ''
        });

        if (options.fontname === '') {
            grunt.fail.warn('Fontname must not be empty.');
            return;
        }

        /*grunt.file.write( options.outputfile, content );*/

        var args = [];
        var all = true;
        var types = [];
        _.each(['ttf','eot','woff','woff2','svg'], function(value, key) {
            if (options[value] === false) {
                all = false;
            } else {
                types.push(value);
            }
        });
        if (all) {
            args.push('--all');
        } else {
            _.each(types, function(value, key) {
                switch(value) {
                    default:
                        args.push('--'+value);
                    break;
                }
            });
        }

        // Loop through the options and add them to args
        // Omit urls from the options to be passed through
        _.each(options, function(value, key) {
            if (value === '') {
                return;
            }
            switch (key) {
                case "fontname":
                    if (!_.isString(value)) {
                        grunt.fail.warn('Invalid Google font-name.');
                    }
                    args.push('--font');
                    args.push(value);
                    break;
                case "fontstyles":
                    if (!_.isString(value)) {
                        grunt.fail.warn('Invalid Google font-styles.');
                    }
                    args.push('--styles');
                    args.push(value);
                    break;
                case "fontdest":
                    if (!_.isString(value)) {
                        grunt.fail.warn('Invalid font files destination.');
                    }
                    args.push('--destination');
                    args.push(value);
                    break;
                case "cssdest":
                    if (!_.isString(value)) {
                        grunt.fail.warn('Invalid CSS file destination.');
                    }
                    args.push('--out');
                    args.push(value);
                    break;
                case "cssprefix":
                    if (!_.isString(value)) {
                        grunt.fail.warn('Invalid CSS prefix.');
                    }
                    args.push('--prefix');
                    args.push(value);
                    break;
                case "subset":
                    if (!_.isString(value)) {
                        grunt.fail.warn('Invalid character subset.');
                    }
                    args.push('--subset');
                    args.push(value);
                    break;
            }
        });

        //grunt.log.writeln(args);
        grunt.log.write('Start download of Google WebFont sourcefiles...');

        grunt.util.spawn({
            cmd: require.resolve('goog-webfont-dl'),
            args: args
        }, function(err, result, code) {

            //grunt.log.write(JSON.stringify(result));
            if (err) {
                if (err.toString() === 'Error' && result.stdout !== '') {
                    grunt.log.error(result.stdout);
                }
                done(err);
                return;
            }

            grunt.log.ok();

            done();
        });

    });

};
