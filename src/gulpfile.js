var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer'); 
var plumber = require('gulp-plumber'); 
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var htmlclean = require('gulp-htmlclean');
var minify = require('gulp-minify');

gulp.task('default', ['compileSass', 'watch', 'html', 'jsApp', 'jsVendor']);

gulp.task('html', function (){
    return gulp.src('./index.html')
        .pipe(htmlclean())
        .pipe(rename('main.min.index.html'))
        .pipe(gulp.dest('../dist/'))
});

gulp.task('jsApp', function(){
    return gulp.src('./scripts/app/**/*.js')
        .pipe(minify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('../dist/scripts/app'));
});

gulp.task('jsVendor', function(){
    return gulp.src('./scripts/vendor/*.js')
        .pipe(minify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest('../dist/scripts/vendor'));
});

gulp.task('compileSass', function () {
    return gulp.src('./styles/main.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({ browsers: ['> 0%']}))
        .pipe(gulp.dest('../dist/styles/'))
        .pipe(cleanCSS())
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('../dist/styles/'));
});

gulp.task('watch', function () {
    gulp.watch('./styles/**/*.scss', ['compileSass']);
    gulp.watch('./index.html',['html']);
    gulp.watch('./scripts/app/**/*.js',['jsApp']);
    gulp.watch('./scripts/vendor/*.js',['jsVendor']);
});