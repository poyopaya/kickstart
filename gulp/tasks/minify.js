// Create minified versions of js and css.

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  minify = require('gulp-minify-css'),
  uglify = require('gulp-uglify');

gulp.task('minify', ['coffee', 'browserify', 'sass'], function() {
  gulp.src(['./public/js/kickstart.js'])
    .pipe(uglify())
    .pipe(rename('kickstart.min.js'))
    .pipe(gulp.dest('./public/js'));

  gulp.src(['./public/css/kickstart.css'])
    .pipe(minify())
    .pipe(rename('kickstart.min.css'))
    .pipe(gulp.dest('./public/css'));
})
