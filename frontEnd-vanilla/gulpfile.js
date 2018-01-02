var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');


gulp.task('js', function(){
    return gulp.src('./src/scripts/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('html', function(){
    return gulp.src('./src/index.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*', ['js', 'html']);
})

gulp.task('default', ['js', 'html', 'watch']);