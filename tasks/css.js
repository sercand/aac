var config = require('./config.js');
var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var util = require('gulp-util')

gulp.task('css:dev', function () {
  return gulp.src(config.paths.src.css)
    .pipe(uglifycss())
    .pipe(gulp.dest(config.paths.builds.dev.css))
});

gulp.task('css:prod', function () {
  return gulp.src(config.paths.src.css)
    .pipe(uglifycss())
    .pipe(gulp.dest(config.paths.builds.prod.css))
    .on('error', util.log);
});
