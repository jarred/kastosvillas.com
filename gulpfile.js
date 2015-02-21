var gulp            = require('gulp');
var sass            = require('gulp-sass');
var cssMinify       = require('gulp-minify-css');
var concat          = require('gulp-concat');
var del             = require('del');
var gutil           = require('gulp-util');
var minifyCSS       = require('gulp-minify-css');

gulp.task('clean', function (done){
  del(['assets/css/style.min.css'], done);
});

gulp.task('css', [], function (){
  gulp.src('assets/_scss/style.scss')
    .pipe(sass())
    .pipe(concat('style.min.css'))
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('assets/css'))
  return
});

gulp.task('watch', ['clean'], function (){
  gulp.watch('scss/**/*.scss', ['css']);
})

gulp.task('default', ['watch', 'css']);
