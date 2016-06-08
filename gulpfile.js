var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    util = require('gulp-util'),
    concat = require('gulp-concat');

gulp.task('build-sass', function(){
	return gulp.src('./scss/**/*.scss')
		.pipe( sourcemaps.init() )
		.pipe( sass({outputStyle:'compact'}).on('error', sass.logError))
		.pipe( sourcemaps.write() )
		.pipe( gulp.dest('./'));
});

gulp.task('build-js', function(){
	return gulp.src([
		'node_modules/angular/angular.js',
		'node_modules/angular-resource/angular-resource.js',
		'node_modules/angular-route/angular-route.js',
		'node_modules/fastclick/lib/fastclick.js',
		'js/**/*.js'
	])
	.pipe( sourcemaps.init() )
	.pipe( concat('application.js').on('error', function( error ){
		util.log( util.colors.red( error ) );
		util.beep();
		
		this.emit('end');
	}))
	.pipe( sourcemaps.write() )
	.pipe( gulp.dest( 'dist/' ) );
});

gulp.task('watch', function(){
	gulp.watch([
		'scss/**/*.scss',
	],[
		'build-sass'
	]);

	gulp.watch([
		'js/**/*.js'
	],[
		'build-js'
	]);
});

gulp.task('default',[
	'watch'
]);