var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browser = require('browser-sync').create();

gulp.task('server', function() {
    browser.init({
        server: {
            baseDir: "./src/www"
        }
    });
});

gulp.task('server-reload', function() {
    browser.reload();
});

var paths = {
    sass: ['./src/scss/**/*.scss']
};

gulp.task('sass', function(done) {
    gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./src/www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./src/www/css/'))
        .on('end', done);
});



gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass', 'server-reload']);
});

gulp.task('default', ['sass', 'server', 'watch']);
