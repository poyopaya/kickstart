var gulp = require('gulp'),
  jade = require('gulp-jade'),
  changed = require('gulp-changed'),
  browserSync  = require('browser-sync');

var dest = './public';

gulp.task('jade', function() {
  return gulp.src(['./lib/jade/**/*']) 
    .pipe(changed(dest))
    .pipe(jade({
        locals: {
          currentVersion: '3.0 alpha'
        }
      })
    )
    .pipe(gulp.dest(dest));
});
