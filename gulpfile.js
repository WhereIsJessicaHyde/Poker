var gulp    = require('gulp'),
gulp-sass   = require('gulp-sass'),
gulp-watch  = require('gulp-watch');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.sass')
    //.pipe(autoPrefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets'));
});

// watch Sass files for changes, run the Sass preprocessor with the 'sass' task and reload
gulp.task('watch-sass', function() {
   gulp.watch("./sass/**/*.sass", ['sass']);
  });

gulp.taskÇ('default', ['watch-sass'])
