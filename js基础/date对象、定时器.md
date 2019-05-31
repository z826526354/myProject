## 日期对象Date()

日期对象：是系统提供好的

注意： 我们new出来的对象是记录的date出生的那一刻，并不是实时地

```js
var date = new Date();

date.getDate();  // 返回当前这个月的第几天。就是几号（1 ~ 31）
date.getDay();   // 返回当前周的第几天（0 ~ 6）
date.getMonth(); // 返回当前年的第几个月 （0 ~ 11）
date.getFullYear(); // 返回当前年份（四位数）
date.getHours();    // 返回当前小时（0 ~ 23）
date.getMinutes();  // 返回当前分钟（0 ~ 59）
date.getSeconds();  // 返回当前秒钟（0 ~ 59）
date.getMilliseconds(); // 返回当前毫秒（0 ~ 999）
date.getTime();    // *返回 1970 年 1 月 1 日至今的毫秒数（计算机的纪元时刻，也是最常用的）

date.setDate();  // 设置月的第几天。就是几号（1 ~ 31）
date.setDay();   // 设置周的第几天（0 ~ 6）
date.setMonth(); // 设置年的第几个月 （0 ~ 11）
date.setFullYear(); // 设置年份（四位数）
date.setHours();    // 设置小时（0 ~ 23）
date.setMinutes();  // 设置分钟（0 ~ 59）
date.setSeconds();  // 设置秒钟（0 ~ 59）
date.setMilliseconds(); // 设置毫秒（0 ~ 999）
date.setTime();    // 以毫秒设置date对象
```

#### 定时循环器

`setInterval(function () {}, time)`

```js
var time = 1000;
setInterval(function () {}, time);
time =2000;
// 事实上这个 setInterval 里面的 time 只识别一次，即使在后面再次修改也是不好使的
```

我们可以来验证定时器到底准不准

```js
var firstTime = new Date().getTime();
setInterval(function () {
	var lastTime = new Date().getTime();
	console.log(lastTime - firstTime);
	firstTime = lastTime;
}, 1000)
// 结果是很不准的

setInterval("console.log('a')", 1000); // 另一种写法每隔1000毫秒运行字符串里面的代码
```

#### 定时器

`setTimeout(function () {}, 1000)`

只运行一次，运行完成后结束，用法与setInterval相差无几

#### 清除定时、定时循环器

`clearInterval();`

```js
var timer = setInterval(function () {}, 1000);
var timer2 = setInterval(function () {}, 2000);
console.log(timer, timer2); // 1 2
clearInterval(timer);
```

由于setInterval是window上的一个方法，而每生成一个setInterval，window就会给这个setInterval打上一个唯一标识；我们清除的就是这个标识；

