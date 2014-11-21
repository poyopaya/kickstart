// Create minified versions of js and css.

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  minify = require('gulp-minify-css'),
  changed = require('gulp-cached'),
  uglify = require('gulp-uglify');

gulp.task('docs:minify', ['docs:coffee', 'docs:browserify', 'docs:sass'], function() {
  var dest = './docs/js';
  gulp.src(['./docs/js/**/*.js', '!./docs/js/**/*.min.js'])
    .pipe(changed(dest))
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename += ".min"
    }))
    .pipe(gulp.dest(dest));

  gulp.src(['./docs/css/**/*.css', '!./docs/css/**/*.min.css'])
    .pipe(minify())
    .pipe(rename(function(path) {
      path.basename += ".min"
    }))
    .pipe(gulp.dest('./docs/css'));
})
