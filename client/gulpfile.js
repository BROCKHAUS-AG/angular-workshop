const gulp = require('gulp');
const fs = require('fs');
const path = require('path');

const paths = {
  assets: ['./src/**/*.html', './src/**/*.ico', './src/**/*.css', './src/**/*.json'],
};

gulp.task('copy:assets', () => {
  gulp.src(paths.assets)
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', ['copy:assets'], () => {
  gulp.watch(paths.assets, ['copy:assets']);
});

gulp.task('default', ['copy:assets'], () => {
});
