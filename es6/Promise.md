## ES6变化 - Promise

- 异步编程简述：

​		无论是在浏览器环境中还是在node环境中，我们都会使用JavaScript完成各种异步操作，如在浏览器环境中的定时器、事件、ajax等或是node环境中的文件读取、事件等。伴随着异步编程的就是回调机制。明确一点，异步编程避不开回调。



- 异步编程问题：

​		产生回调地狱，难于维护和拓展。

​		try catch只能捕获同步代码中出现的异常

​		同步并发的异步存在一定的问题

- 解决方案：

​		ES6Promise可以解决毁掉地狱、以及同步并发的异步问题，但是依旧会有明显的回调痕迹，之后的ES6的generator、es7的async、await就会最大的让异步代码看起来跟同步一样，写起来更优雅。

回调是什么：当做某件事满足一定条件后，再做另一件事。

```html
<input type="text" id="inp"></input>
<button type="button" id=btn></button>
<script>
	let arr = [];
    let oBtn = document.getElementById('btn');
    let oInput = document.getElementById('inp');
    oBtn.onclick = function () {
        arr.push(oInput.value);
        if (arr.length == '4') {
            show(arr)
        }
    }
	function show(data) {
        console.log(data);
    }
</script>
```



jQuery：callbacks可以管理回调函数

loadsh：JavaScript实用工具库，提供各种方法提升开发效率，提供after高阶函数辅助回调操作

```js
// 高阶函数：函数的参数有函数， 函数的返回值是函数
// 承接上面的代码块
function after(num, func) {
    return function () {
        if(--num == 0) {
            func.apply(window, arguments);
        }
    }
}
let newShow = after(5, show);
// 通过有没有满足条件来管理回调
```

我们再来看node环境中, 我们想获取的数据需要经过多层获取的话，必然产生回调地狱，不好维护，且难以拓展其他功能

```js
let fs = readFile('fs');
fs.readFile('./xxx/xxx.txt', 'utf-8', (err, data) => {
    if (data) {
        fs.readfile(data, 'utf-8', (err, data) => {
            if (data) {
                fs.readfile(data, 'utf-8', (err, data) => {
                    console.log(data);
                }
            }
        })
    }
})
```

虽说node是后端语言，但是依然是JavaScript语言，es6 的promise的出现，给我们提升了很大的开发效率

- try。。。catch

```js
try {
    setTimeout(() => {
        console.log(a);
    }, 1000)
}catch (e) {
    console.log(e);
}
console.log('123'); // 后面要执行的代码体
// 这种情况依然捕捉不到会报错：setTimeout内部依然在进行异步操作

// 补救1：
setTimeout(() => {
    try {
        console.log(a)
    } catch (e) {
        console.log(e);
    }
})
console.log('123');// 后面要执行的代码体

// 补救2：
window.onerror = function () {
    console.log('hahah');
}
console.log(a);
console.log('123');// 后面要执行的代码体
// 后端也是一样的道理
```

### Promise的使用

与jQuery中的defferred不同的是：defferred中通过`done` `fail` `progress`来相应注册函数中的成功、失败、等待。触发分别是通过`resolve` `reject` `notify`来触发

在ES6中：只能注册两个：成功、失败，在执行时其实就是一个等待的过程

#### then

```js
let oP = new Promise((resolve, reject) => {
    // 等待过程
    setTimeout(() => {
        Math.random() *100 > 60 ? resolve('ok') : reject('no');
        // 通过是否大于60分来决定注册成功或者失败
    }, 1000)
})

// .then注册的函数被触发后，执行时就是异步执行的。
/*
在任务队列中有 宏任务和微任务 之分，宏任务会优先被放到
任务队列里边执行，但是微任务有优先执行权，而".then"内部就是微任务
*/
oP.then((val) => {
    console.log(val);
    return new Promise((resolve, reject) => {
        resolve('newPromise ok');
    })
}, (reason) => {
    console.log(reason)
    return 20;
}).then((val) => {
    console.log('then2' + val);
}, (reason) => {
    console.log('no then2' + reason)
})
// 可以链式操作，并且第一次如果成功，下一次执行一定是成功的，跟defferred又是不同。

// 第一次执行时返回的值，回作为第二次执行时的参数，这就跟defferred很像了。

// 如果第一次成功返回的是一个promise对象，那么第二个then执行成功与否,
// 就在于return的promise内部执行的是resolve还是reject了。

// 无论'.then'执行成功与否，只要抛出错误，第二个".then"就是执行失败，
// 错误信息也会作为参数传给reason。
```

利用then解决nodejs中的readFile回调地狱

```js
let fs = require('fs');
function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (data) {
                res(data);
            }
        })
    })
}

readFile('./xxx/xxx.txt').then((data) => {
    return readFile(data);
}).then((data) => {
    return readFile(data);
}).then((data) => {
    console.log(data)
})
```



有了前面的基础，再来看下面的方法

#### catch

```js
let oP = new Promise((res, rej) => {
    res();
});
oP.then(() => {
    throw new Error('duyi');
}, (reason) => {
    console.log(reason);
}).then(() => {
    // 如果练市调用写一个空then是不会影响后续操作的（直接被忽视）
}).catch((err) => {
    console.log(98, err); // 98 Error: duyi
})
// 这后面依然是可以链式调用的
```

#### finally

```js
// finally 就代表最终的结束了
```

#### all

同步 并发 异步操作 的结果

`Promise.all`可以将多个Promise对象包装成一个新的Promise实例

同时成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，失败的时候返回最先被reject触发失败状态的值（谁先失败返回谁）

```js
let fs = require('fs');
let student = {};

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (data) {
                res(data);
            }
        })
    })
}
// 这里的数据获取需要通过三个文件
promise.all([readFile(./xx/xx1.js), [readFile(./xx/xx2.js), [readFile(./xx/xx3.js)]).then((val) => {
	console.log(val); // 结果输出3个函数执行后的结果都在val里面了
})
```

#### race（赛跑）

`promise.race([p1, p2, p3])`里面的哪个结果获得块，就返回哪个结果，不管成功还是失败，就是比谁快

```js
let fs = require('fs');
let student = {};

function readFile(path) {
    return new Promise((res, rej) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (data) {
                res(data);
            }
        })
    })
}
promise.race([readFile(./xx/xx1.js), [readFile(./xx/xx2.js), [readFile(./xx/xx3.js)]).then((val) => {
	console.log(val); // 结果输出3个函数执行后的结果都在val里面了
})
```



## [ES6变化 - Promise(ES5源码模拟实现)](./myPromise.js)

