var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    browserSync   = require('browser-sync'),
    gutil         = require('gulp-util'),
    webpack       = require('webpack');


gulp.task('sass', function(){
  return gulp.src('src/sass/**/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('dist'))
      .pipe(browserSync.reload({stream: true}))
});


gulp.task("webpack", function(callback) {
    // run webpack
  let options = require('./webpack.config.js')
    webpack(options, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack", err);
        gutil.log("[webpack]", stats.toString({
            // output options
        }));
        callback();
    });
}); 
gulp.task('browser-sync', function(){
  browserSync ({
    server: {
      baseDir: './dist'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass','webpack'], function(){
  gulp.watch('src/sass/**/*.sass',['sass']);
  gulp.watch('dist/index.html', browserSync.reload);
  gulp.watch('src/js/**/*.js', ['webpack']);
  gulp.watch('src/js/**/*.js', browserSync.reload);
});
