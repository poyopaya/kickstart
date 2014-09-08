// This needs to be here so normalize is not included twice in rails.

var gulp       = require('gulp'),
  concat       = require('gulp-concat')

gulp.task('normalizecss', ['sass'], function() {
  return gulp.src(['./node_modules/normalize.css/normalize.css', './public/css/kickstart.css'])
    .pipe(concat('kickstart.css'))
    .pipe(gulp.dest('./public/css'));
});
