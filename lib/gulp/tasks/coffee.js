var gulp = require('gulp'),
  coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  gulp.src(['./lib/apps/**/*.js'])
    .pipe(gulp.dest('./public/apps'));

  gulp.src(['./lib/apps/**/*.coffee'])
    .pipe(coffee())
    .pipe(gulp.dest('./public/apps'));

  gulp.src(['./lib/js/**/*.js'])
    .pipe(gulp.dest('./public/js'))

  return gulp.src(['./lib/coffee/**/*.coffee'])
    .pipe(coffee())
    .pipe(gulp.dest('./public/js'));
})
