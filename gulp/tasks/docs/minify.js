// Create minified versions of js and css.

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  minify = require('gulp-minify-css'),
  uglify = require('gulp-uglify');

gulp.task('docs:minify', ['docs:coffee', 'docs:browserify', 'docs:sass'], function() {
  gulp.src(['./docs/js/docs.js'])
    .pipe(uglify())
    .pipe(rename('docs.min.js'))
    .pipe(gulp.dest('./docs/js'));

  gulp.src(['./docs/css/docs.css'])
    .pipe(minify())
    .pipe(rename('docs.min.css'))
    .pipe(gulp.dest('./docs/css'));
})
