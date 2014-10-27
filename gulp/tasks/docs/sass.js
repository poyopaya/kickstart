var gulp       = require('gulp'),
  sass         = require('gulp-ruby-sass'),
  browserSync  = require('browser-sync'),
  prefix        = require('gulp-autoprefixer');

gulp.task('docs:sass', ['docs:images'], function() {
  return gulp.src(['lib-docs/sass/**/*.{sass, scss}', '!lib-docs/sass/vendor', '!lib-docs/sass/vendor/**'])
    .pipe(sass({
      sourcemapPath: process.cwd() + './lib-docs/sass',
      loadPath: [
        process.cwd() + '/lib-docs/sass'
      ],
      style: 'compressed'
    }))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('./docs/css'));
});
