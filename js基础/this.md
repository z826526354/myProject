# 剖析this

### this的指向有哪几种情况？

this代表函数调用相关联的对象，通常页称之为执行上下文。

1. 作为函数直接调用，非严格模式下，this指向window，严格模式下，this指向undefined；
2. 作为某对象的方法调用，this通常指向调用的对象。
3. 使用apply、call、bind 可以绑定this的指向。
4. 在构造函数中，this指向新创建的对象
5. 箭头函数没有单独的this值，this在箭头函数创建时确定，它与声明所在的上下文相同。

### 如果对一个函数进行多次 bind，那么上下文会是什么呢？

```js
let a = {}
let fn = function () { console.log(this) }
fn.bind().bind(a)() // => window
```

不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定，所以结果永远是 window。

```js
// fn.bind().bind(a) 等于
let fn2 = function fn1() {
  return function() {
    return fn.apply()
  }.apply(a)
}
fn2()
```

### 多个this规则出现时，this最终指向哪里？

首先，new 的方式优先级最高，接下来是 bind 这些函数，然后是 obj.foo() 这种调用方式，最后是 foo 这种调用方式，同时，es6中箭头函数的 this 一旦被绑定，就不会再被任何方式所改变。 

### 箭头函数 => 中this

箭头函数不会创建自己的this,**它只会从自己的作用域链的上一层继承this**