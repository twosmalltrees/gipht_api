const gulp = require('gulp');
const babel =  require('gulp-babel');

gulp.task('transpile', function () {
  gulp.src('app/*')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});
