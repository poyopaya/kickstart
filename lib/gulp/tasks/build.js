var gulp = require('gulp');

// Temporarily removing coffeescript, needed?
gulp.task('build', ['browserify', 'jade', 'images', 'sass', 'normalizecss', 'coffee', 'todo', 'rails']);
