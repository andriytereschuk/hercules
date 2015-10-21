var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var iconfontCss = require('gulp-iconfont-css');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        proxy: "http://localhost/hercules"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream());
});

// svg to font and generate scss
var fontName = 'icons';
 
gulp.task('iconfont', function(){
  gulp.src(['icons/*.svg'],{base: './'})
    .pipe(iconfontCss({
      fontName: fontName,
      path: 'templates/_icons.css',
      targetPath: '../scss/_icons.scss',
      fontPath: '../fonts/',
    }))
    .pipe(iconfont({
      fontName: fontName,
      normalize: true
     }))
    .pipe(gulp.dest('fonts'));
});


gulp.task('default', ['serve']);