var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch('./lib/sass/**', ['sass', 'normalize.css']);
    gulp.watch('./lib/images/**', ['images']);
    gulp.watch('./lib/coffee/docs.coffee', ['coffee']);
    gulp.watch('./lib/jade/**', ['jade']);
    gulp.watch(['./lib/jade/tests/**', './lib/tests/**'], ['test']);
});
