var gulp = require('gulp');

// This doesn't
// gulp.task('build', ['browserify', 'sass', 'images', 'coffee', 'jade']);

// This works
gulp.task('build', ['browserify', 'jade', 'coffee', 'images', 'sass']);
