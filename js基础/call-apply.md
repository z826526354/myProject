# call和apply实现

- 相同点：**call 和apply **改变this指向

- 差异： 传参列表不同

  call 需要把实参按照形参的个数传进去

  apply 需要传一个arguments

- 优点：借用别人的工厂生产函数

  ```js
  // call的第一个参数是要改变的目标
  function Person1(name) {
      this.name = name
  }
  
  var obj = {};
  person1.call(obj, "hsz"); // this就指向了obj
  console.log(obj); // {name: "hsz"}
  
  function Person(name, age, sex) {
      this.name = name;
      this.age = age;
      this.sex = sex;
  }
  function Student(name, age, sex, tel, grade) {
      // var this = {}; 自己隐式地生成
      Person.call(this, name, age, sex); // 借用别人的函数，实现自己的功能
      // 再增加自己想要的属性、方法
      this.tel = tel;
      this.grade = grade;
  }
  var student = new Srudent("hsz", 123, "male", 139, 2019)
  ```

  



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

