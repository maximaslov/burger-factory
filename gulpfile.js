const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const replace = require('gulp-replace');
const gulpCopy = require('gulp-copy');

gulp.task('copy-img', function() {
  return gulp.src('src/img/**/*')
    .pipe(gulpCopy('dist/img', { prefix: 2 }));
});

gulp.task('build', function() {
    return gulp.src('src/*.html')
      .pipe(replace('styles.css', 'styles.min.css'))
      .pipe(replace('index.js', 'index.min.js'))
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
  });


gulp.task('minify-html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-js', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', function() {
  return gulp.src('src/styles/*.css')
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('default', gulp.series(gulp.parallel('copy-img', 'minify-js', 'minify-css', 'minify-html'), 'build'));