## ES6 变化 - Generator

Generator简介：

​	生成器，本身是函数，执行后返回迭代对象，函数内部要配合yield使用Generator函数分段执行，遇到yield暂停。

特点：

​	function和函数名之间需要带 " * "

​	函数体内部yield表达式，产出不同的内部状态（值）

示例：

```js
function *test() {
    // yeild 产出
    yield 'a';
    console.log('1'); 
    yield 'b'; // 遇到下一个yield暂停
    yield 'c';
    return 'd';
}
let oG = test(); // 此时oG就是一个迭代对象了
oG.next(); // {value : 'a', done : false}
oG.next('hsz'); // 1 {value : 'b', done : false}
oG.next(); // hsz {value : 'c', done : false}
oG.next(); // {value : 'd', done : true}
```

对iterator的改造

```js
let obj = {
	0 : 'a',
    1 : 'b',
    2 : 'c',
    length : 3,
    [Symbol.iterator] : function *() {
    	let curIndex = 0;
        while (curIndex != this.length) {
            yield this[curindex];
            curIndex ++;
        }
    }
}
```

迭代解决nodejs中的回调地狱，变得更优雅

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

// 相比以前的似乎代码变得更多了
function *read() {
    let val1 = yield readFile('./xxx/xxx.txt');
    let val2 = yield readFile(val1);
    let val3 = yield readFile(val2);
    return val3
}
let oG = read();
let {value, done} = oG.next();
value.then((val) => {
    let {value, done} = oG.next(val);
    value.then((val) => {
        let {value, done} = oG.next(val);
    	value.then((val) => {
            console.log(val)
        })
    })
})

// 没关系，还没优化完呢 ==> 递归优化
// 模仿大神 TJ 写的 Co 函数
function Co(oIt) {
    return new Promise((res, rej) => {
        let next = () => {
            let {value, done} = oIt.next();
            if (done) {
                res(value);
            }else {
                value.then((val) => {
                    next(val);
                }, rej)
            }
        }
        next();
    })
}

Co(read()).then((val) => {
    console.log(val);
}, () => {
    
})
```



## promisify

```js
let fs = require('fs');
function promisify(func) {
    return function (...arg) {
        return new Promise((res, rej) => {
            func(...arg, (err, data) => {
                if (err) {
                    rej(err);
                }else {
                    res(data);
                }
            })
        })
    }
}
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);
let readDir = promisify(fs.readDir);
// 减少代码量，降低耦合度，统一处理

readFile('./xxx/xxx.txt', 'utf-8').then((val) => {
    console.log(val);
})

function promisifyAll(fs) {
    for (let key in obj) {
        let fn = obj[key];
        if (typeof fn === 'function') {
            obj[key + 'Async'] = promisify(fn);
        }
    }
}
promisifyAll(fs);
readFile('./xxx/xxx.txt', 'utf-8').then((val) => {
    console.log(val);
})
```



