var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect'),
  jade = require('gulp-jade'),
  coffee = require('gulp-coffee');

// Main entry point

gulp.task('default', ['connect', 'watch']);

// Basic builder

gulp.task('build', function() {
  gulp.start('compile:css', 'compile:jade');
})

// Compilers

gulp.task('compile:css', function() {
  return gulp.src(['./lib/sass/**/*.{sass, scss}'])
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

gulp.task('compile:jade', function() {
  return gulp.src(['./lib/jade/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('./'));
});

gulp.task('compile:coffee', function() {
  return gulp.src(['./lib/coffee/**/*.coffee'])
    .pipe(coffee())
    .pipe(gulp.dest('./js'));
})

gulp.task('connect', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('watch' , function() {
  gulp.watch(['./lib/sass/**/*.{sass, scss}'], ["compile:css"]);
  gulp.watch(['./lib/jade/**/*.jade'], ["compile:jade"]);
  gulp.watch(['./lib/coffee/**/*.coffee'], ["compile:coffee"]);
});
