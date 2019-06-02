## ES6

现在已有 ES7（2016）、ES8（2017）、ES9（2017），很多新增内容仍是提案

普遍使用的依然是ES6、ES7部分内容

很多新版本内容，浏览器和node环境并未完全支持，但已有babel工具可以对其进行编译支持（转译成ES5）

所以：新版本语言只是在原有基础上新增了一些语法糖，执行时会转化成ES5

ES6中引入的语言新特性，更具有规范性，易读性，方便操作、简化了大型项目开发的复杂程度、降低了出错概率，提升了开发效率

- 在线babel工具：

  https://babeljs.io/repl

  https://www.babeljs.cn

  npm本地下载此工具

  1.

  @babel/core：搭建本地环境核心模块

  @babel-preset-env：转化ES5核心模块

  @babel/cli： 执行编译功能

  ```npm
  npm init -y
  npm install @babel/core @babel/cli @babel-preset-env
  ```

  2.创建并且设置`.babelrc`文件（严格json格式）

  ```json
  {
  	"presets": [
  		"@babel/preset-env"
  	]
  }
  ```

  

  3.转换为ES5文件

  ```npm
  npx babel xxx.js -o xxx.js (-watch)
  ```

- ### ES6变化之let&const

  #### let

  1）回顾var（变量声明）

   变量声明提升、可以重复定义、全局变量挂载到window

  2）回顾作用域（变量声命周期）：

  曲剧作用域、函数作用域

  3）let （块级变量声明）：

  没有变量声明提升、不能重复定义、不挂载到window

  声明的变量和"{}"配合产生块级作用域-生命 在大括号内部的变量无法在外部使用

  ```js
  {
  	let a = 10;
  }
  console.log(a); // a is not defined
  ```

  

  产生临时死区（Temporal Dead Zone）

  ```js
  let a = 10;
  {
      console.log(a); // a is not defined
      let a = 20;
  }
  ```

  

  解决闭包问题（ES6 规范后引入的）

  ```js
  var arr = [];
  for (let i = 0; i < 10; i++) {
  	arr[i] = function () {
  		console.log(i);
  	}
  };
  arr[0]();
  arr[4]();
  arr[7]();
  // 解决块级作用域产生闭包
  ```

  

  #### const

  常量声明，必须赋值，存储常量的空间里面的值不可改变，其他跟let一样

  下面这种情况却是可以的

  ```js
  const PI = {};
  PI.name = 20;
  ```

  效率：const > let

- ### ES6变化-spreed&rest

  ... 展开收集运算符：

  `...arg`作为形参时必须是最后一个参数

  此运算符在不同地方使用有不同功效，可以从写和读两个角度考虑。

  作用：简化书写长度，提升开发效率

  写：----收集作用

  ```js
  function(...arg) {
      console.log(...arg); // [1, 2, 3]
  }
  test(1, 2, 3); 
  ```

  读： ----展开作用

  ```js
  var arg = [1, 2, 3];
  console.log(...arg);
  ```

  

  应用：去掉最大值和最小值， 求平均值

  ```js
  function avearge(...arg) {
  	arg.sort(function (a, b) {
  		return a - b;
  	});
  	arg.pop();
  	arg.shift();
  	return commputedScore(...arg);// 读场景
  }
  
  function commputedScore(...arg) {
  	let sum = 0;
  	arg.forEach(function (ele) {
  		sum += ele;
  	});
  	return sum / arg.length;
  };
  
  
  let arr1 = [1, 2, 3, 4];
  let arr2 = [6, 7, 8];
  let newArr = [...arr1, ...arr2];
  // 相当于[].concat(arr1, arr2);
  ```

  注：ES6/ ES7 : ES6可以处理数组，ES7能处理对象

  在ES7中实现浅层克隆

  ```js
  let company = {
  	name: 'duyi',
  	age: 18
  };
  let teachDepartment = {
  	leader: {
  		name: 'cg',
  		age: 20
  	},
  	personNum: 25
  };
  let obj = {
  	...company,
  	...teachDepartment
  };
  console.log(obj);
  ```

  数据少的时候的深层克隆 ____es7 ...{}

  ```js
  let company = {
  	name: 'duyi',
  	age: 18
  };
  let leader = {
  	name: 'cg',
  	age: 20
  };
  let teachDepartment = {
  	leader:{
  	...leader
  },
  	personNum: 25
  };
  let obj = {
  	...company,
  	...teachDepartment,
  	leader: {
  		...leader
  	}
  };
  console.log(obj);
  
  // 会丢失reg正则，函数
  let obj1 = JSON.parse(JSON.stringify(teachDepartment));
  obj1.leader.name = 'mg';
  ```

  

- ### ES6变化-destructuring

  作用：简化书写长度，提升开发效率

  解构（结构化赋值）：

  解构过程中，具备赋值和变量声明两个功能

  目的在于把等号左右长的相似的两个东西内部的值取出来。

  对象、数组都可以参与解构：

  ```js
  let obj = {name : 'hsz', age : 20};
  let {name, age} = obj;
  // 或者
  let name, age;
  ({name, age} = obj);
  // ===>
  ({name, age} = {name : 'hsz', age : 20})
  ```

  默认参数：(当我们要解构的obj中没有sex 的时候就会默认添加上去，有的话会以解构目标为主)

  ```js
  let {name, age, sex = 'male'} = obj; // 这个obj没有的sex就是默认参数
  ```

  