var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('images', function () {
    gulp.src('./assets/images/**/*.png')
        .pipe(gulp.dest('./build/client/images'))
        .pipe(livereload());
});
