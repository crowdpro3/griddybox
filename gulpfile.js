'use strict';

var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('html', function () {
  return gulp.src('./src/**/*.html', { allowEmpty: true })
         .pipe(gulp.dest('./dist/'))
});

gulp.task('scss', function () {
  return gulp.src('./src/scss/index.scss', { allowEmpty: true })
         .pipe(scss({ outputStyle: 'expanded', includePaths: ['./node_modules/'] }).on('error', scss.logError))
         .pipe(gulp.dest('./dist/'));
});

gulp.task('watcher', function () {
  gulp.watch('./src/**/*.html', gulp.series('html'));
  gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
});

gulp.task('dev', gulp.series('html', 'scss', 'watcher'));

gulp.task('build', gulp.series('html', 'scss'));

gulp.task('default', gulp.series('dev'));