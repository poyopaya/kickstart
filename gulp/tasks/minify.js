// Create minified versions of js and css.

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  minify = require('gulp-minify-css'),
  uglify = require('gulp-uglify');

gulp.task('minify', ['coffee', 'browserify', 'sass'], function() {
  gulp.src(['./public/js/**/*.js', '!./public/js/**/*.min.js'])
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename += ".min"
    }))
    .pipe(gulp.dest('./public/js/'));

  gulp.src(['./public/css/**/*.css', '!./public/css/**/*.min.css'])
    .pipe(minify())
    .pipe(rename(
      function(path) {
        path.basename += ".min"
      }
    ))
    .pipe(gulp.dest('./public/css/'));
})
