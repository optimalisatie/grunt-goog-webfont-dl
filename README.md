grunt-goog-webfont-dl
=====================

A grunt wrapper for Google WebFont Downloader ([goog-webfont-dl](https://github.com/jrnewell/goog-webfont-dl)) by [James Newell](https://github.com/jrnewell).

> [goog-webfont-dl](https://github.com/jrnewell/goog-webfont-dl) is a Google WebFont utility to download webfont files to your local machine. It attempts to retreieve WOFF, TTF, EOT, and SVG file formats using custom user-agent strings. It will then output a CSS3 snippet that you can use directly in your project.

## Getting Started

This plugin requires Grunt

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create
a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-goog-webfont-dl --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-goog-webfont-dl');
```

## Goog-webfont-dl task

_Run this task with the `grunt goog-webfont-dl` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.


### Usage

Use the `grunt-goog-webfont-dl` task by specifying a target destination (file) for your font-CSS, the name of the [Google Font](https://www.google.com/fonts/) and the font-styles.
Below this is `dist/ubuntu.css` for the [Ubuntu](https://www.google.com/fonts/specimen/Ubuntu) font.

Along-side, specify the font file-types you want to download. Not all font file-types are supported in every browser. Check compatibility: [TTF](http://caniuse.com/#feat=ttf), [EOT](http://caniuse.com/#search=eot), [WOFF](http://caniuse.com/#search=woff), [SVG](http://caniuse.com/#search=svg) 

```js
"goog-webfont-dl": {
  ubuntu: {
      options: {
          ttf: true,
          eot: true,
          woff: true,
          svg: true,
          fontname: 'Ubuntu',
          fontstyles: '300,500,700',
          cssdest: 'dist/ubuntu.css',
          cssprefix: ''
      }
  }
}
```

## Maintainers

* [@optimalisatie](https://github.com/optimalisatie)
 
## Contributors

* [@michael-k](https://github.com/michael-k)

## License

(C) [www.optimalisatie.nl](https://optimalisatie.nl) 2014, released under the MIT license
