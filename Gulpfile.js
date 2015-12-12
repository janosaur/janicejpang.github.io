var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function() {
    gulp.src('./portal/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./portal/css/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('portal/scss/*.scss',['styles']);
});