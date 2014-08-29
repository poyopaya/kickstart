var gulp = require('gulp'),
  jade = require('gulp-jade');

gulp.task('jade', function() {
  return gulp.src(['./lib/jade/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('./public'));
});
