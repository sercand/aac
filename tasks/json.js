var config = require('./config.js');
var gulp = require('gulp');
var jsonminify = require('gulp-jsonminify');
var util = require('gulp-util')

gulp.task('json:dev', function () {
  return gulp.src(config.paths.src.json)
    .pipe(jsonminify())
    .pipe(gulp.dest(config.paths.builds.dev.root))
});

gulp.task('json:prod', function () {
  return gulp.src(config.paths.src.json)
    .pipe(jsonminify())
    .pipe(gulp.dest(config.paths.builds.prod.root))
    .on('error', util.log);
});
