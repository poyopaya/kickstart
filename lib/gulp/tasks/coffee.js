var gulp = require('gulp'),
  gulpif = require('gulp-if'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src(['./lib/coffee/*', './lib/js/*', '!./lib/js/kickstart.js'])
    .pipe(gulpif(/[.]coffee$/, coffee()))
    .pipe(gulp.dest('./public/js'));

  // Bundle system with kickstrap.js
  gulp.src(['./node_modules/systemjs/dist/system.js', './lib/js/kickstart.js'])
    .pipe(concat('kickstart.js'))
    .pipe(gulp.dest('./public/js'))

  // Add dependencies for system.js
  gulp.src(['./node_modules/es6-module-loader/dist/es6-module-loader.js', './node_modules/es6-module-loader/node_modules/traceur/bin/traceur.js'])
    .pipe(gulp.dest('./public/js'))

  gulp.src(['./lib/apps/**/*.coffee','./lib/apps/**/*.js'])
    .pipe(gulpif(/[.]coffee$/, coffee()))
    .pipe(gulp.dest('./public/apps'));
})
