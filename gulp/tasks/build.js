var gulp = require('gulp');

gulp.task('build', ['browserify', 'sass', 'images', 'coffee', 'markup']);
