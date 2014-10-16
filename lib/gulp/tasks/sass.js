var gulp       = require('gulp'),
  sass         = require('gulp-ruby-sass'),
  browserSync  = require('browser-sync'),
  prefix        = require('gulp-autoprefixer');

gulp.task('sass', ['images'], function() {
  return gulp.src(['lib/sass/**/*.{sass, scss}', '!lib/sass/vendor', '!lib/sass/vendor/**'])
    .pipe(sass({
      sourcemapPath: './lib/sass',
      loadPath: [
        process.cwd() + '/lib/sass'
      ],
      style: 'compressed'
    }))
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('./public/css'));
});
