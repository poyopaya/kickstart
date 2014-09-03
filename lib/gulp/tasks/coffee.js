var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src(['./lib/coffee/*', './lib/js/*'])
    .pipe(gulpif(/[.]coffee$/, coffee()))
    .pipe(gulp.dest('./public/js'));
})
