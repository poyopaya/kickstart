var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  browserSync  = require('browser-sync');

gulp.task('sass', ['images'], function() {
  return gulp.src(['./lib/sass/**/*.{sass, scss}'])
    .pipe(sass({
      compass: true
    }))
    .pipe(gulp.dest('./public/css'));
});
