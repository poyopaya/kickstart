/*
 * Additional test for PhantomJS.
 */
var gulp           = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');
var coffee         = require('gulp-coffee');
var expect         = require('gulp-expect-file');


gulp.task('test', ['mocha'], function() {
  var files = ['public/tests/main/index.html']
  return gulp.src(files)
    // .pipe(expect(files))
    .pipe(mochaPhantomJS({reporter: 'list'}))
});
