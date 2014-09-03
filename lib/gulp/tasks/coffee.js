var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src(['./lib/coffee/*', './lib/js/*'])
    .pipe(gulpif(/[.]coffee$/, coffee()))
    .pipe(gulp.dest('./public/js'));
})
