var gulp = require('gulp'),
  sass = require('gulp-ruby-sass'),
  browserSync  = require('browser-sync');

gulp.task('sass', ['images'], function() {
  return gulp.src('./lib/sass/**/*.{sass, scss}')
    .pipe(sass({
      sourcemapPath: './lib/sass',
      loadPath: [
        process.cwd() + '/lib/sass'
      ]
    }))
    .pipe(gulp.dest('./public/css'));
});
