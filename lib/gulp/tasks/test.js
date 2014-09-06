/*
 * Additional test for PhantomJS.
 */
var gulp           = require('gulp');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

gulp.task('test', ['mocha'], function() {
  return gulp.src('tests/main/index.html')
    .pipe(mochaPhantomJS({reporter: 'xunit', dump:'test.xml'}))
});
