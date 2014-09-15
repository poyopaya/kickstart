var gulp = require('gulp'),
  jade = require('gulp-jade'),
  browserSync  = require('browser-sync');

gulp.task('jade', function() {
  return gulp.src(['./lib/jade/**/*'])
    .pipe(jade({
        locals: {
          currentVersion: '3.0 alpha'
        }
      })
    )
    .pipe(gulp.dest('./public'));
});
