var gulp = require('gulp'),
  jade = require('gulp-jade'),
  icons = require('../../../docs/icons.js'),
  settings = require('./settings'),
  changed = require('gulp-cached'),
  fs = require('fs');

var dest = './docs';

gulp.task('docs:jade', function() {
  return gulp.src(['./lib-docs/jade/**/*.jade'])
    .pipe(changed(dest))
    .pipe(jade({
        locals: {
          currentVersion: settings.currentV,
          docsVersion: settings.docsV,
          nextDocsVersion: settings.nextV,
          fs: fs,
          icons: icons
        }
      })
    )
    .pipe(gulp.dest(dest));
});
