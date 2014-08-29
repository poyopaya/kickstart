var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  watch = require('gulp-watch'),
  connect = require('gulp-connect'),
  jade = require('gulp-jade'),
  coffee = require('gulp-coffee');

// Main entry point

gulp.task('default', ['build', 'connect', 'watch']);

// Basic builder

gulp.task('build', function() {
  gulp.start('compile:css', 'compile:jade', 'compile:assets', 'compile:coffee');
})

// Compilers

gulp.task('compile:css', function() {
  return gulp.src(['./lib/sass/**/*.{sass, scss}'])
    .pipe(sass())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('compile:jade', function() {
  return gulp.src(['./lib/jade/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('./public'));
});

gulp.task('compile:coffee', function() {
  return gulp.src(['./lib/coffee/**/*.coffee'])
    .pipe(coffee())
    .pipe(gulp.dest('./public/js'));
})

gulp.task('compile:assets', function() {
  gulp.src('./lib/themes/**/*').pipe(gulp.dest('./public/themes'));
  return gulp.src('./lib/img/**/*').pipe(gulp.dest('./public/img'));
})

gulp.task('connect', function() {
  connect.server({
    livereload: true,
    root: 'public'
  });
});

gulp.task('watch' , function() {
  gulp.watch(['./lib/sass/**/*.{sass, scss}'], ["compile:css"]);
  gulp.watch(['./lib/jade/**/*.jade'], ["compile:jade"]);
  gulp.watch(['./lib/coffee/**/*.coffee'], ["compile:coffee"]);
});
