var gulp = require('gulp'),
  jade = require('gulp-jade'),
  changed = require('gulp-changed')

var dest = './docs';

gulp.task('docs:jade', function() {
  return gulp.src(['./lib-docs/jade/**/*.jade'])
    .pipe(changed(dest))
    .pipe(jade({
        locals: {
          currentVersion: '3.0 alpha',
          docsVersion: '3.x',
          fs: require('fs')
        }
      })
    )
    .pipe(gulp.dest(dest));
});
