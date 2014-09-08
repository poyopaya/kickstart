var gulp = require('gulp');

gulp.task('rails', ['coffee', 'browserify'], function() {
  gulp.src(['./lib/sass/**'])
    // Copy Sass library to rails-style directories.
    .pipe(gulp.dest('./rails/app/assets/stylesheets/kickstart_rails'));

  gulp.src(['./public/js/**'])
    // Copy Sass library to rails-style directories.
    .pipe(gulp.dest('./rails/app/assets/javascripts/kickstart_rails'));
})
