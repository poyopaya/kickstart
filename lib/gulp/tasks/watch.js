var gulp = require('gulp');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch('./lib/sass/**/*.sass', ['sass']);
    gulp.watch('./lib/images/**', ['images']);
    gulp.watch(['./lib/coffee/docs.coffee', './lib/coffee/navbar-fixer.coffee'], ['coffee']);
    gulp.watch('./lib/jade/**/*.jade', ['jade']);
    gulp.watch(['./lib/jade/tests/**', './lib/tests/**'], ['test']);
});
