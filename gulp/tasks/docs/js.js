var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  uglify = require('gulp-uglify'),
  coffee = require('gulp-coffee'),
  babel  = require('gulp-babel');

gulp.task('core:js', function() {
  return gulp.src([
    './lib-core/js/**/*.js',
    './lib-core/coffee/**/*.coffee',
    './lib-core/tests/**/*.coffee',
    './lib-core/tests/**/*.js'
  ])
  .pipe(gulpif(/[.]coffee$/, coffee()))
  .pipe(babel())
  .pipe(gulp.dest('./core/js-alc'))
});

gulp.task('docs:js', ['core:js'], function() {
  return gulp.src([
    './lib-docs/js/**/*.js',
    './lib-docs/coffee/**/*.coffee'
  ])
  .pipe(gulpif(/[.]coffee$/, coffee()))
  .pipe(babel())
  .pipe(gulp.dest('./docs/js-alc'))
});

gulp.task('docs:test:js', ['core:js', 'core:test:js'], function() {
  return gulp.src([
    './lib-docs/tests/**/*.js',
    './lib-docs/tests/**/*.coffee'
  ])
  .pipe(gulpif(/[.]coffee$/, coffee()))
  .pipe(babel())
  .pipe(gulp.dest('./docs/js-alc/tests/'))
});

gulp.task('core:test:js', ['core:js'], function() {
  return gulp.src([
    './lib-core/tests/**/*.js',
    './lib-core/tests/**/*.coffee'
  ])
  .pipe(gulpif(/[.]coffee$/, coffee()))
  .pipe(babel())
  .pipe(gulp.dest('./core/js-alc/tests/'))
});
