# call和apply实现

#### call

```js
Function.prototype.newCall = function () {
	var ctx = arguments[0] || window;
	ctx.fn = this;
	var args = [];
	for (var i = 1; i < arguments.length; i++) {
		args.push(`arguments[${i}]`)
	}
	return result = eval(`ctx.fn(${args.join(',')})`);
	delete ctx.fn;
}
```

eval();——会改变作用域，不好，但是这里为了实现 call功能，并没有其他影响
join() 方法用于把数组中的所有元素放入一个字符串

#### apply

```js
Function.prototype.newApply = function (ctx, arr) {
	var ctx = ctx || window;
	ctx.fn = this;
	if (!arr) {
		return result = ctx.fn();
		delete ctx.fn;
	}else {
		var args = [];
		for (var i = 0; i < arr.length; i++) {
			args.push(`arr[${i}]`)
		}
		return result = eval(`ctx.fn(${args.join(',')})`);
		delete ctx.fn;
	}
}
```

