var newer    = require('gulp-newer');
var gulp       = require('gulp');

gulp.task('docs:icons', function() {
  var dest = './docs/';

  return gulp.src('./lib-docs/icons/**/*')
    .pipe(newer(dest)) // Ignore unchanged files
    .pipe(gulp.dest(dest));
});
