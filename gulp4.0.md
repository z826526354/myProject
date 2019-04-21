开始之前需要做一些一些准备工作

下载插件到文件 package.json

```json
"devDependencies": {
   "gulp": "^4.0.0",
   "gulp-autoprefixer": "^6.0.0",
   "gulp-clean-css": "^4.0.0",
   "gulp-connect": "^5.7.0",
   "gulp-htmlclean": "^2.7.22",
   "gulp-imagemin": "^5.0.3",
   "gulp-less": "^4.0.1",
   "gulp-postcss": "^8.0.0",
   "gulp-strip-debug": "^3.0.0",
   "gulp-uglify": "^3.0.2"
}
```



可以开始工作了

```js
var gulp = require('gulp');

var htmlClean = require('gulp-htmlclean');// plugin ———— 压缩 html

var imageMin = require('gulp-imagemin'); // 压缩图片

var uglify = require('gulp-uglify');	   // 压缩js

var stripDebug = require('gulp-strip-debug');// 去掉调试语句

var less = require('gulp-less'); 			// 配置 less

var cleanCSS = require('gulp-clean-css');	// 压缩 css

var autoPrefixer = require('gulp-autoprefixer');// autoprefixer
// var postcss = require('gulp-postcss'); // 会报错
// autoPrefixer 完全可以取代 postcss

var connect = require('gulp-connect');
console.log(connect.reload());

var folder = {
	src: 'src/',
	dist: 'dist/'
}

// 判断环境变量
// $ export NODE_ENV=development————设置环境

var devMod = process.env.NODE_ENV == 'development';
console.log(devMod);

// 当有多个任务时

// gulp.task('my-tasks', gulp.series('a', 'b', 'c', function() {
  // 在a, b, c之后做一些事情
// }));
// gulp.task('build', gulp.parallel('styles', 'scripts', 'images', function () {
//   // 建立 website.
// }));

// 或者这样:

// gulp.task('my-tasks', gulp.series('a', gulp.parallel('styles','scripts', 'images'), 'b', 'c', function() {
//   // Do something after a, b, and c are finished.
// }));

gulp.task('html', function () {
	var page = gulp.src(folder.src + 'html/*')
		.pipe(connect.reload());
		if (!devMod) {
			page.pipe(htmlClean())
		}
		page.pipe(gulp.dest(folder.dist +'html/'));// 将文件名写入/*.html
		return page; 
});
gulp.task('image', function () {
	gulp.src(folder.src + 'image/*')
		.pipe(imageMin())
		.pipe(gulp.dest(folder.dist + 'image/')); // 将文件名写入/*.image
});
gulp.task('css', function () {
	var page = gulp.src(folder.src + 'css/*')
		.pipe(connect.reload())
		.pipe(less())
		.pipe(autoPrefixer());
		if (!devMod) {
			page.pipe(cleanCSS({compatibility: 'ie8'}))
		}
		page.pipe(gulp.dest(folder.dist + 'css/'));
		return page;  // 将文件名写入dist / * .js
});
gulp.task('js', function () {
	var page = gulp.src(folder.src + 'js/*')
		.pipe(connect.reload());
		if (!devMod) {
			page.pipe(stripDebug())
			.pipe(uglify());
		}
		page.pipe(gulp.dest(folder.dist + 'js/')); // // write filename to dist/*.js
		return page; 
});

// 打开服务器配置端口
gulp.task('server', function () {
	connect.server({
		livereload: true, // browser auto refresh
		port: '9292' // the port
	});
})

// 监控 files
gulp.task('watch', function () {
	gulp.watch(folder.src + 'html/*', gulp.series('html'));
	gulp.watch(folder.src + 'css/*', gulp.series('css'));
	gulp.watch(folder.src + 'js/*', gulp.series('js'));
})

// 最后将所有函数添加到 gulp.task 并且 run
gulp.task('default', gulp.parallel('html', 'css', 'js', 'image', 'server', 'watch'));

// gulp.parallel() ————gulp4.0
// gulp.series() ———— 按顺序执行
// gulp.paralle() ———— 并行计算
```

