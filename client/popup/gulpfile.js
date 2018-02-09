var gulp = require('gulp');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var browserify = require('gulp-browserify');


gulp.task('js', function(){
    return gulp.src('./src/scripts/index.js')
    .pipe(browserify({
        insertGlobals : true,
        debug : !gulp.env.production
    }).on('error', (err) => {console.log(err)}))
    .pipe(babel().on('error', (err) => {console.log(err)}))
    .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('html', function(){
    return gulp.src('./src/popup.html')
    .pipe(htmlmin().on('error', (err) => {console.log(err)}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
    gulp.watch('./src/**/*', ['js', 'html']);
})

gulp.task('default', ['js', 'html', 'watch']);