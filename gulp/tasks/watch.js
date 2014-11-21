var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch('./lib/sass/**/*.sass', ['sass', 'minify']);
    gulp.watch('./lib/images/**', ['images']);
    gulp.watch('./lib/jade/**/*.jade', ['jade']);
    gulp.watch(['./lib/jade/tests/**', './lib/tests/**'], ['test']);
});
