var gulp = require('gulp');

gulp.task('watch', ['set-watch', 'browser-sync'], function() {
	// Note: The browserify task handles js recompiling with watchify
  gulp.watch('./test/lib/pvjs/pvjs-dev.bundle.js', ['modernizr']);
  //gulp.watch('./dist/**', ['update-dev-bundle']);
	//gulp.watch('./lib/**', ['testDev']);
});
