var gulp = require('gulp'),
  rename = require('gulp-rename'),
  mustache = require('gulp-mustache');

gulp.task('rails', ['coffee', 'browserify'], function() {
  gulp.src(['./lib/sass/**'])
    // Copy Sass library to rails-style directories.
    .pipe(gulp.dest('./rails/app/assets/stylesheets/kickstart_rails'));

  gulp.src(['./public/js/**'])
    // Copy Sass library to rails-style directories.
    .pipe(gulp.dest('./rails/app/assets/javascripts/kickstart_rails'));

  gulp.src(['./rails/lib/kickstart_rails/version.mustache'])
    // Copy Sass library to rails-style directories.
    .pipe(mustache({
      version: String(Date.now()).substr(1, Date.now().length)
    }))
    .pipe(rename('version.rb'))
    .pipe(gulp.dest('./rails/lib/kickstart_rails/'));
})
