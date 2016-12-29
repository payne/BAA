var gulp = require('gulp');
var qunit=require('gulp-qunit');
var debug = require('gulp-debug');
var browserify = require('gulp-browserify');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var mkdirp = require('mkdirp');

var errorCode=0;

gulp.task('test1',function() {
  /* based on https://github.com/jonkemp/gulp-qunit/issues/9 */
  return gulp.src('./qunit/test-runner1.html')
    .pipe(qunit())
    .pipe(debug())
    .on('error', function(err) {
        errorCode = 1;
        process.emit('exit'); // this did not work :-(
        //process.exit(errorCode);
    });
});

gulp.task('test2',function() {
  /* based on https://github.com/jonkemp/gulp-qunit/issues/9 */
  return gulp.src('./qunit/test-runner2.html')
    .pipe(qunit())
    .pipe(debug())
    .on('error', function(err) {
        errorCode = 1;
        process.emit('exit'); // this did not work :-(
        //process.exit(errorCode);
    });
});

process.on('exit', function() {
    process.exit(errorCode);
});

gulp.task('remove-build', function() { 
  return gulp.src('./build', {read: false}).pipe(clean());
});

gulp.task('build', ['remove-build'], function() {
  mkdirp.sync('./build');
  gulp.src('./source/index.html').pipe(gulp.dest('./build'));
  // http://stackoverflow.com/questions/33923630/how-to-use-both-gulp-babel-and-gulp-browserify was helpful
  return gulp.src('./source/ArrayToTable.js')
    .pipe(browserify())
    .pipe(babel())
    .pipe(rename("app.bundle.js"))
    .pipe(gulp.dest('./build'));
});