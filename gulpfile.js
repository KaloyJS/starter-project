require('no-pollution');
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// compiles scss into css
function style() {
	// 1. where is my scss file
	return (
		gulp
			.src('./asset/scss/**/*.scss')
			// 2. pass that file through sass compiler
			.pipe(sass())
			// 3  where do i save the compiled CSS?
			.pipe(gulp.dest('./public/css'))
	);
}

function watch() {
	gulp.watch('./asset/scss/**/*.scss', style);
}

exports.style = style;
exports.watch = watch;
