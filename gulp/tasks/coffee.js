var gulp = require('gulp'),
  coffee = require('gulp-coffee');

gulp.task('coffee', function() {
  return gulp.src(['./lib/coffee/**/*.coffee'])
    .pipe(coffee())
    .pipe(gulp.dest('./public/js'));
})
