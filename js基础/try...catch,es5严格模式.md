### try {} catch (e) {}

- 防止部分的代码出错，影响后续代码的执行

- try 里面的代码如果都正确，catch里面的代码就不执行，否则catch里面的代码执行

  ```js
  try {
      console.log('a');
      console.log(b);
      console.log('c');
      // 到第二个console 的时候; 不执行，但是try外边的 "h" 依然被执行 
  }catch (e) {
      console.log(e);
      // catch 的作用就是把try里面的错误捕捉到，
      // 然后把（error.message error.name）封
      // 装到一个error对象里面, 然后传给e，供我们使用
  }
  console.log('h');
  ```

  

- 在不知道后台传来data数据是否有错误的时候，这个是非常方便

- #### Error.name　的六种值对应的信息

  1）EvalError : eval() 的使用与定义不一致

  2）RangeError : 数值越界

  3）ReferenceError : 非法或不能识别的引用数值 ***

  ​      例如：未经声明就使用

  4）SyntaxError : 发生语法解析错误 ***

  ​      例如：出现中文符号

  5）TypeError : 操作数据类型错误 **

  6）URLError : URL处理函数使用不当

  

## ES5严格模式

- 目前我们使用的浏览器都是基于es3.0 的 + es5.0 的新增方法 使用的;

  如果他俩产生冲突就会以es5.0为准, 否则使用es3.0， 定义为 "es5.0严格模式"

  

  启动开关："use strict";  必须写在逻辑的最顶端；

```js
"use strict";
function test() {
    console.log(arguments.callee) // 报错如下 caller一样
}
// Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
```

- 两种用法：

  全局严格模式

  局部函数内部严格模式

- 必须要在支持es5的浏览器上才可以

- 不支持with () {}

  ```js
  var obj = {name : "obj"};
  var name = 'window';
  function test() {
      var name = 'scope';
      width(obj) {
          console.log(name);
      }
      // with里面的代码会按照正常顺序执行，
      // 但是当with传一个对象后就发生了大变化，
      // 它会把这个对象当做with要执行的代码体的作用域链的最顶端；
      // 也就是会作用域链改变
      // with跟命名空间配合使用，可以发挥很大的功效
      width (document) {
          write ('a')
      }
      // 但是with 会更改作用域链，使代码运行效率变得非常慢
  }
  test();
  ```

- 变量赋值前必须声明

-  局部的this必须被赋值或者外部new，而且赋什么就是什么，否则指向空（undefined）

  （可以使用call / apply）

  ```js
  "use strict";
  funciton test() {
      console.log(this); // 123
  }
  test.call(123);
  ```

  在非严格模式下，`test.call(原始值)`是坚决不行的，会给你包装成包装类Number {123}

  全局下的`console.log(this)`; 指向window；

- 拒绝重复的属性和参数，重复属性不报错，重复参数报错

- 不允许使用eval（）;

  可以把字符串当成代码执行
  
  ```js
  eval('console.log(123)'); // 123
  ```
  
  可以改变作用域
  

  
  

