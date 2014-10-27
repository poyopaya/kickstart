var gulp = require('gulp');

gulp.task('iframes', function() {
  gulp.src(['./lib/iframes/**'])
    .pipe(gulp.dest('./public/iframes'));
})
