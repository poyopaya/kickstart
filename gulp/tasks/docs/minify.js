// Create minified versions of js and css.

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  minify = require('gulp-minify-css'),
  uglify = require('gulp-uglify');

gulp.task('docs:minify', ['docs:coffee', 'docs:browserify', 'docs:sass'], function() {
  gulp.src(['./docs/js/**/*.js'])
    .pipe(uglify())
    .pipe(rename(function(path) {
      path.basename += ".min"
    }))
    .pipe(gulp.dest('./docs/js'));

  gulp.src(['./docs/css/**/*.css'])
    .pipe(minify())
    .pipe(rename(function(path) {
      path.basename += ".min"
    }))
    .pipe(gulp.dest('./docs/css'));
})
