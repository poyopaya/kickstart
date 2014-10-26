var gulp = require('gulp');

gulp.task('build', ['browserify', 'jade', 'images', 'sass', 'coffee', 'minify']);
gulp.task('build:docs', ['browserify', 'jade', 'images', 'sass', 'coffee', 'rails', 'iframes', 'minify']);
