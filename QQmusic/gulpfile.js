var gulp = require('gulp');

// 插件——压缩 html
var htmlClean = require('gulp-htmlclean');

var imageMin = require('gulp-imagemin'); // 压缩 图片

var uglify = require('gulp-uglify');	   // 压缩 js

var stripDebug = require('gulp-strip-debug');// 去掉调试语句

var less = require('gulp-less'); 			// 配置 less

var cleanCSS = require('gulp-clean-css');	// 压缩 css

var autoPrefixer = require('gulp-autoprefixer');// 自动前缀
// var postcss = require('gulp-postcss'); // 会报错
// autoPrefixer完全可以取代postcss

var connect = require('gulp-connect');
console.log(connect.reload());


var folder = {
	src: 'src/',
	dist: 'dist/'
}

// 判断环境变量
// $ export NODE_ENV=development————设置环境变量

var devMod = process.env.NODE_ENV == 'development';
console.log(devMod);


// 当有多个任务时
// gulp.task('my-tasks', gulp.series('a', 'b', 'c', function() {
  // Do something after a, b, and c are finished.
// }));
// gulp.task('build', gulp.parallel('styles', 'scripts', 'images', function () {
//   // Build the website.
// }));


// 或者这样
// gulp.task('my-tasks', gulp.series('a', gulp.parallel('styles','scripts', 'images'), 'b', 'c', function() {
//   // Do something after a, b, and c are finished.
// }));


gulp.task('html', function () {
	var page = gulp.src(folder.src + 'html/*')
		.pipe(connect.reload());
		if (!devMod) {
			page.pipe(htmlClean())
		}
		page.pipe(gulp.dest(folder.dist +'html/')); // 文件写入到dist/*.html
});
gulp.task('image', function () {
	gulp.src(folder.src + 'image/*')
		.pipe(imageMin())
		.pipe(gulp.dest(folder.dist + 'image/')); // 文件写入到dist/*.image
});
gulp.task('css', function () {
	var page = gulp.src(folder.src + 'css/*')
		.pipe(connect.reload())
		.pipe(less())
		.pipe(autoPrefixer());
		if (!devMod) {
			page.pipe(cleanCSS({compatibility: 'ie8'}))
		}
		page.pipe(gulp.dest(folder.dist + 'css/')); // 文件写入到dist/*.css
});
gulp.task('js', function () {
	var page = gulp.src(folder.src + 'js/*')
		.pipe(connect.reload());
		if (!devMod) {
			page.pipe(uglify())
			.pipe(stripDebug());
		}
		page.pipe(gulp.dest(folder.dist + 'js/')); // 文件写入到dist/*.js
});

gulp.task('server', function () {
	connect.server({
		livereload: true,
		port: '9292'
	});
})

gulp.task('watch', function () {
	gulp.watch(folder.src + 'html/*', ['html']);
	gulp.watch(folder.src + 'css/*', ['css']);
	gulp.watch(folder.src + 'js/*', ['js']);
})

gulp.task('default', ['html', 'css', 'js', 'image', 'server', 'watch']);

// gulp.parallel() ————gulp4.0
// gulp.series：按照顺序执行
// gulp.paralle：可以并行计算

// gulp.src()
// gulp.dest()
// gulp.task()
// gulp.watch()