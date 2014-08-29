var gulp = require('gulp');

// Temporarily removing coffeescript
gulp.task('build', ['browserify', 'jade', 'images', 'sass']);
