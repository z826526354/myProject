## Class(类)

核心变化：

class、constructor、static、extends、super

#### es5 - Class 回顾

​		面向过程目的在于把功能拆分成步骤，一环扣一环的完成，但是需求复杂到一定程度后，对开发者能力的挑战也是越来越强。

​		面向对象的目的在于前期吧功能拆分并抽象成不同对象，聚焦于每个对象的能力和他们之间的配合，项目复杂后相对于面向过程来说较为轻松一些。

​		面向对象的编程语言需要具备封装 继承 多态，js不是面向对象的语言，而是基于对象的语言，js中基本上一切皆对象

- 前端编程需要面向对象的思想：

  相对复杂的业务为了做到功能服用，降低项目开发复杂度，需要这种思想，

  比如：前端校验可以写一个校验器。而不是面向过程每次需要验证都一条线的下来编写

  目前前端主流框架VUE React都是采用面向对象的方式来做。以及进入公司进行高级开发，组件研发，制作功能模块，也需要采取这样的思想做事
  
- 回顾ES5-class

  ```js
  Plane.prototype.fly = function () {
      console.log("fly");
  }
  function Plane(name) {
      this.name = name || '普通飞机';
      this.blood = 100;
  }
  var oPlane1 = new Plane();
  // 通过原型来继承公有属性
  
  // 再定义一个攻击机
  // 继承原型
  // AttackPlane.prototype = Plane.prototype; 
  // 这种不好，共享一个原型了，变得不灵活了，一个变另一个就会跟着变
  
  // AttackPlane.prototype = new Plane();// 这种也不好，相当于认贼作父了
  // 后来出现了圣杯模式，但是也很麻烦
  
  // AttackPlane.prototype.__proto__ = Plane.prototype;
  // 这种方式可以继承自己没有的属性，同时可以自己随意改变而不影响祖先，
  // 但是要知道__proto__是系统的内置属性，过多的修改可能会引发难以解决的未知错误
  
  // 所以在ES6中 出现了Object.setPrototypeOf
  Object.setPrototypeOf(AttackPlane.prototype, Plane.prototype);
  
  // 相当于： AttackPlane.prototype.__proto__ = Plane.prototype;
  // 类似于 AttackPlane.prototype = Object.create(Plane.prototype, {
  // 	constructor : AttackPlane
  // })
  
  AttackPlane.prototype.dan = function () {console.log('biubiubiu~')}
  function AttackPlane(name) {
      Plane.call(this, name); // 继承私有属性（借用构造函数的方式）
  }
  var oAp = new AttackPlane('攻击机');
  var oPlane = new Plane();
  ```

  

## ES6 - Class方法

  在ES6 中class已然成为了一个关键字

```js
class Plane {
    // ES7 私有属性 name = 10;即使用babel语言降级，它依然是私有属性
    // 目前还是无法直接在原型加普通的（非函数）属性
    
    // ES6中还不支持这种非方法的静态属性（ES7支持）
    static alive () { // 这个方法最后会成为Plane上的方法（静态属性/函数属性）
        return true;
    }
    constructor (name) { // 私有属性
        this.name = name || '普通飞机';
        this.blood = 100;
    }
    fly () { // 公有属性（原型上加方法）
        console.log('fly');
    }
}
// var oP = new Plane();
// console.log(oP);

class AttackPlane extend Plane{ 
    // 这种extend继承继承的还是 公有属性和静态属性
    // 而且继承的静态属性依然不是在原型上的，通过AttackPlane依然可以获取到
    constructor (name) {
        super(name); // 这样就继承了私有属性，其实就是Plane.call(this, name)
        this.logo = 'duyi'
    }
    dan () {
        console.log('biubiubiu~')
    }
}
var oAp = new AttackPlane('攻击机');
```

在ES6中 Class方法定义了，必须通过new的方式创建构造函数，否则报错

class Plane.prototype 不能枚举

静态属性要放到Plane里边  而非原型





## ES6 - Class方法(es5源码解析)

- 在ES6中 Class方法定义了，必须通过new的方式创建构造函数，否则报错

```js
function _calssCallCheck(_this, _constructor) {
    if (!(_this instanceof _constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}
function Plane () {
    _classCallCheck(this, Plane); // 内部会调用这个函数来进行判断 
}
```

- 静态属性要放到Plane里边  而非原型， 在ES5源码中利用立即执行函数来提高运行效率
- class Plane.prototype 不能枚举

```js
function _calssCallCheck(_this, _constructor) {
    if (!(_this instanceof _constructor)) {
        throw new TypeError("Cannot call a class as a function")
    }
}

function defineProperties(target, props) {
    // 实现Object.defineProperty()
    props.forEach(function (ele) {
        Object.defineProperty(target, ele.key, {
        	value : ele.value,
        	writable : true,
        	configurable : true
        })
    })
}
function _createClass(_constructor, _prototypeProperties, _staticProperties) {
    // 处理共有属性和静态属性
    if (_prototypeProperties) { // 给原型上赋值
        defineProperties(_constructor.prototype, _prototypeProperties);
    }
    if (_staticProperties) {
        defineProperties(_constructor, _staticProperties);
    }
}
var Plane = (function () {
    function Plane(name) {
        // 判断是否以new的方式执行
        _calssCallCheck(this, Plane);
        // 设置私有属性
        this.name = name || '普通飞机';
        this.blood = 100;
    }
    _createClass(Plane, [
        {// 公有属性
           key : "fly",
           value : function () {console.log('fly')}
        }
    ], [// 静态属性
        {
            key : 'alive',
            value : function () {return true}
        }
    ])
    return Plane;
}())
var oPlane = new Plane('hsz&普通飞机');
console.log(oPlane);

// 继承同样用立即执行函数的方式
function _inhert(sub, sup) {
    Object.setPrototypeOf(sub.prototype, sup.prototype);
    // es5转译版本更为复杂，主要是为了支持老版本浏览器
}
var AttackPlane = (function (Plane) {
    _inhert(AttackPlane, Plane)
    function AttackPlane (name) {
        _calssCallCheck(this, AttackPlane);
        // es6 中class一个对象，如果父类有返回值，
        // 你会发现后续操作的子类实际上是在操作这个返回值,
        // 而不是你所想要的对象，下面这几步对this的操作就是为了解决这个问题
        var _this = this;
        var that = Plane.call(this, name);
        if (typeof that == 'object') {
            _this = that;
        }
        _this.logo = 'duyi';
        return _this;
    }
    _createClass(AttackPlane, [
        {// 公有属性
           key : "dan",
           value : function () {console.log('biubiubiu~')}
        }
    ], [// 静态属性
        {
            key : 'alive',
            value : function () {return true}
        }
    ])
    return AttackPlane;
}(Plane))
var oAp = new AttackPlane('hsz&攻击机');
console.log(oAp);
```



## ES7 变化 - Class 提案属性

`static.property = xxx;`静态属性

`property = xxx;` 私有属性

`@decorator` 装饰器

提案特性需要下载：

```npm
npm install @babel/plugin-proposal-decorators
```

需要配置

```json
{
    "plugins":[
        ["@babel/plugin-proposal-decorators",{"legacy":true}],
        ["@babel/plugin-proposal-class-properties",{"loose":true}]
    ]
}
```

装饰器的使用（仅供参考）—— 主要还是用来写框架

```html
<input type="text" id="inp"></input>
<button type="button" id="btn"></button>
<script>
    var oInput = document.getElementById('inp');
    var oBtn = document.getElementById('btn');
    
	@outerClass; // 同样也是可以外部装饰这个类
    class Search {
        // static num () {return 6} // es6中静态属性必须是函数

        static num = 10; // 要运行必须要运行babel编译好的es5文件，
        // 之后会发现确实成为了Search的静态属性

        constructor () { // 私有属性
            this.keyValue = '';
        }
    	@myReadOnly;// 装饰紧挨着自己后面的属性 
    	// 必须在后面写一个相对应的函数，才能起到装饰作用，
    	// 而且在浏览器执行的时候，这个@myReadOnly在定义class的时候就会去执行
    
        url = 'urlA-'; // 相当于在constructor里写属性
    	@dealData
        getContent (a, b) { // 公有属性（原型上的属性）
            console.log(a, b + "发送请求")
            return 20;
        }
    	@eatSlider('hsz');
    	slider () {
            console.log('eating')
        }
    }
    function outerClass(proto, key, descriptor) {target.ddd = 40}
    // 外部装饰可以添加私有属性
    
    function myReadOnly(proto, key, descriptor) { // 装饰私有属性
 // 第一个参数：原型， 第二个参数："url"（修饰的属性的名称）
 // 第三个参数：{configurable:true,enumerable:true,writable:true,initializer:f}
        descriptor.writable = false;// url这个属性就不可写了
        console.log(descriptor.initializer()); // urlA- ==> 就是url的属性值
        descriptor.initializer = function () {
            // 当我们修饰私有属性(包括匿名函数表达式)的时候没有value只有initializer
            return 6; // url属性值 ==> 6
        }
    }
    function dealData(proto, key, descriptor) {
        // 当我们装饰的是一个命名函数表达式的时候，第三参数有变化
        // 第三个参数:
        // {value:f,writable:true,enumerable:true,configurable:true}
        // value:f getContent()
        
        // 那么我们如何添加新的功能呢？如下，让它成为一个新的函数
        let oldValue = descriptor.value; // 将原有的函数储存起来（代理思想）
        descriptor.value = function () {
            console.log(000); // 而此时等同于Seach 里的getContent已经被重写了
            console.log(this); // 依然指向Search
            return oldValue.apply(this, arguments);
            // 这样做的话，会发现原有的功能保留了，并添加了新的功能
            // return的目的就是为了兼容原有函数的return值，
            // 不然新函数return 的是 undefined
        }
    }
    function eatSlider(ms) { 
        // 利用返回的函数装饰原有函数可以达到信息传递最大化
        return function (proto, key, descriptor) {
            let oldEat = descriptor.value;
            descriptor.value = function () {
                console.log(ms); // 
                console.log(000); // 而此时等同于Seach 里的getContent已经被重写了
                console.log(this); // 依然指向Search
                return oldEat.apply(this, arguments);
                // 这样做的话，会发现原有的功能保留了，并添加了新的功能
                // return的目的就是为了兼容原有函数的return值，
                // 不然新函数return 的是 undefined
            }
        }
    }
    
    let oS = new Search();
    
    oInput.oninput = function () {
        oS.keyValue = this.value;
    }
    oBtn.onclick = function () {
        oS.getContent(1, 2);
    }
</script>
```



