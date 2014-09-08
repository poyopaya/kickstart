var gulp = require('gulp');

gulp.task('rails', function() {
  gulp.src(['./lib/sass/**'])
    // Copy Sass library to rails-style directories.
    .pipe(gulp.dest('./rails/app/assets/stylesheets/'));
})
