function MyPromise(executor) {
	var self = this;
	self.status = 'pending';
	self.resolveValue = null;
	self.rejectReason = null;
	// 为了让then注册的函数能够拿到myPromise储存的值作为参数

	self.ResolveCallbackList = [];
	self.RejectCallbackList = [];
	// 储存成功和失败注册的函数

	function resolve(value) {
		if (self.status == 'pending') {
			self.status = 'Fulfilled';
			self.resolveValue = value;
			self.ResolveCallbackList.forEach(function (ele) {
				ele();
				// 当我们执行成功时执行数组中储存的函数
			});
		}
	}

	function reject(reason) {
		if (self.status == 'pending') {
			self.status = 'Rejected';
			self.rejectReason = reason;
			self.RejectCallbackList.forEach(function (ele) {
				ele();
				// 当我们执行失败时执行数组中储存的函数
			});
		}
	}
	try {
		executor(resolve, reject);
	} catch(e) {
		reject(e);
	}
};

// 当我们第一个then注册函数是Promise对象的时候，
// 能够让后面的then按照新的promise执行
function ResolutionReturnPromise(nextPromise, returnValue, res, rej) {
	if (returnValue instanceof MyPromise) {
		returnValue.then(function (val) {
			res(val);
		}, function (reason) {
			rej(reason)
		})
	}else {
		res(returnValue);
	}
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {

	if (!onFulfilled) {  // 处理空then 和 抛出错误
		onFulfilled = function (val) {
			return val;
		}
	}
	if (!onRejected) {
		onFulfilled = function (reason) {
			throw new Error(reason);
		}
	}


	var self = this;
	var nextPromise = new MyPromise(function (res, rej) {
		// 这里的nextPromise好处是可以拿到里面执行的返回值
		// 并且可以在上一个then注册函数成功的前提下让下一个成功函数执行

		if (self.status === 'Fulfilled') {
			setTimeout(function () { 
			// 这里因为我们的权限问题，用setTimeout模拟

				try { // try...catch 对错误的捕获

					// var nextResolveValue = onFulfilled(self.resolveValue);
					// res(nextResolveValue)
					var nextResolveValue = onFulfilled(self.resolveValue);
					ResolutionReturnPromise(nextPromise, nextResolveValue, res, rej);
				} catch(e) {
					rej(e);
				}
			}, 0)
		}

		if (self.status === 'Rejected') {
			setTimeout(function () {
				try {
					var nextRejectValue = onRejected(self.rejectReason);
					ResolutionReturnPromise(nextPromise, nextRejectValue, res, rej);
				} catch(e) {
					rej(e);
				}
			}, 0)
		}

		if (self.status == 'pending') {
			self.ResolveCallbackList.push(function () {
				setTimeout(function () {
					try {
						var nextResolveValue = onFulfilled(self.resolveValue);
						ResolutionReturnPromise(nextPromise, nextResolveValue, res, rej);
					} catch(e) {
						rej(e);
					}
				}, 0)
			});
			self.RejectCallbackList.push(function () {
				setTimeout(function () {// 异步执行
					try {
						var nextRejectValue = onRejected(self.rejectReason);
						ResolutionReturnPromise(nextPromise, nextRejectValue, res, rej);
					} catch(e) {
						rej(e);// 抛出错误
					}
				}, 0)
			});
		}
	})
	return nextPromise
	// 链式操作
}

MyPromise.prototype.catch = function (onRejected) {
	return this.then(null, onRejected);
}

// finally 后面还可以继续 .then()
MyPromise.prototype.finally = function (callback) {
	return this.then(function (data) {
		callback();
		return data;
	}, function (reason) {
		callback();
		throw reason;
	})
}

MyPromise.all = function (promiseArr) {
	return new MyPromise(function (resolve, reject) {
		// promiseArr 所有值都看一下，如果全成功 res
		var arr = [];
		var times = 0;
		function processResult(index, result) {
			arr[index] = result;
			times++;
			if (times == promiseArr.length) {res(arr)}
		}
	for (let i = 0; i < promiseArr.length; i++) {
		var oPromise = promiseArr[i];
		if (typeof oPromise.then == 'function') {
			oPromise.then(function (val) {
					// 我要存一下这个val
					processResult(i, val)
				}, function (reason) {
					rej(reason);
				})
		}else {
			processResult(i, oPromise);
		}

	}
})
}

MyPromise.race = function (promiseArr) {
	return new MyPromise(function (resolve, reject) {
		promiseArr.forEach(function (promise, index) {
			promise.then(resolve, reject);
		})
	})
}

MyPromise.reject = function (reason) {
	return new MyPromise(function (resolve, reject) {
		reject(reason);
	})
}

MyPromise.resolve = function (val) {
	return new MyPromise(function (resolve, reject) {
		resolve(val);
	})
}





let oP = new MyPromise((res, rej) => {
	// throw new Error('hsz');
	setTimeout(() => {
		res(0);
	}, 2000)
});

oP.then((val) => {
	console.log(val, 'ok');
	return 1;
}, (reason) => {
	console.log(reason, 'no');
	return 2;
}).then((val) => {
	console.log(val, 'ok2');
}, (reason) => {
	console.log(reason, 'no2');
})


let arr = [10, 20, 30, 40, 2, 60];
// filter map forEach
let ele = arr.findIndex(value => value < 10);
console.log(ele);// 2

// indexOf
// indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
console.log(arr.includes(2)); // true


// key values entries
for (let key of arr.keys()) {
	console.log(key);
}
let {value, done} = arr.keys().next();
// arr.keys => 所有数组中元素对应属性名的集合 可以遍历的迭代对象
// arr.values => 所有数组中元素的集合 可以遍历的迭代对象
// arr.entires => 所有数组元素和对应属性名锁钩成数组的集合

// includes startsWith endsWith
var str = 'huang sheng zhu'
console.log(str.includes('g s'));// true
console.log(str.startsWith('hu'));// true
console.log(str.endsWith('zhu'));// true