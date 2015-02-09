var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src(['lib/js/**.*.js'])
    .pipe(gulp.dest('public/'))
  // For one-off coffeescript files not included in bundler
});
