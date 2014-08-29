var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch('./lib/sass/**', ['sass']);
    gulp.watch('./lib/images/**', ['images']);
    gulp.watch('./lib/coffee/**', ['coffee']);
    gulp.watch('./lib/jade/**', ['jade']);
});
