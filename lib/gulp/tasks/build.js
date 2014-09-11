var gulp = require('gulp');

gulp.task('build', ['browserify', 'jade', 'images', 'sass', 'coffee', 'todo', 'rails', 'iframes', 'minify']);
