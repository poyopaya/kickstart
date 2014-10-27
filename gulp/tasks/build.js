var gulp = require('gulp');

// Build the core Kickstart components
gulp.task('build', ['browserify', 'jade', 'images', 'sass', 'coffee', 'minify']);

// gulp.task('build:docs', ['browserify', 'jade', 'images', 'sass', 'coffee', 'rails', 'iframes', 'minify']);
// Build the getkickstart.com documentation
gulp.task('build:docs', ['docs:jade', 'docs:browserify', 'docs:images', 'docs:sass']);
