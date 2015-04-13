"use strict";

var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload;

gulp.task('serve', function(cb) {
    browserSync({
        port: 8080,
        server: {
            baseDir: "./"
        }
    });

    gulp.watch([
      "./bower_components/**/*.css",
      "./bower_components/**/*.js",
      "./css/**/*.css",
      "./img/**/*.css",
      "./index.html"
    ], browserSync.reload, cb);
});

gulp.task('default', function (cb) {
  runSequence('serve', cb);
});
