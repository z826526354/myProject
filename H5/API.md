## requestAnimationFrame

我们先来看没有使用css3的以前的动画

```html
<div class="box" style="position:absolute;width:100px;height:100px;background-color:#f60;left:0;top:0;"></div>
<script>
	var box = document.getElementByClassName('box')[0];
    var timer = null;
    function move() {
        /*
        timer = setInterval(function () {
            box.style.left = box.offsetLeft + 10 + 'px';
            if (box.offsetLeft > 600) {
                clearInterval(timer);
            }
        }, 10)
        */
        timer = setTimeout(function () {
            box.style.left = box.offsetLeft + 10 + 'px';
            if (box.offsetLeft < 600) {
                move();
            }else {
                clearTimeout(timer);
            }
        }, 10)
    }
    move();
</script>
```

再对比requestAnimationFrame（屏幕刷新1秒60次）

```js
function run() {
	timer = requestAnimationFrame(function () {
    	box.style.left = box.offsetLeft + 10 + 'px';
        /*
        if (box.offsetLeft < 600) {
            move();
        }else {
        	cancelAnimationFrame(timer);
        }
        */
        var timer2 = requestAnimationFrame(run);
        if (box.offsetLeft > 600) {
            cancelAnimationFrame(timer2);
        }
    })
    // 这里的时间是16.666...
}
```

好处：不会丢帧，根据屏幕刷新频率来执行的

IE8及以下不支持

所以需要兼容性封装

```js
window.requestAnimationFrame = (function () {
	return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
        window.setTimeout(callback, 1000 / 60)
    }
}())
```





##  客户端储存

 #### storage(5M左右)

- `localStorage` : 永久存储

  存储方式：

  ```js
  localStorage.name = 'hsz'
  localStorage.info = JSON.stringify({name:'hsz',company:'duyi'})
  ```

  （json转为字符串格式）

  

  读取方式：

  ```js
  localStorage.name
  JSON.parse(localStorage.info) ; 
  ```

  转为JSON格式

  

- `sessionStorage` : 零时存储(切换新窗口就被删除)

- 提供了基础的API

  `setItem(name, vla)`设置属性值

  `getItem(name)` 获取属性值

  `removeItem(name)` 移除属性

  `clear() `清除属性

#### cookie(4k左右)

存储信息到用户设备上

`navigator.cookieEnabled` : 检测是否启用了cookie

```js
// 封装cookie函数
function cookie(name) {
    var name = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0)) == '') c = c.substring(1);
        if(c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
```





- 设置cookie值/存储期限：

  ```js
  document.cookie="name=hsz;max-age=1000"
  // 单位：s
  ```

  每次只能设置一个值，因为浏览器会认为键值对是这个cookie的属性

  

- 获得cookie值：

  ```js
  document.cookie
  ```

- `expires`当前时间加上保存时间

  ```js
  var timestamp = (new Date().getTime() + 10000);
  var expires = new Date(timestamp).toGMTString();
  document.cookie = "name=hsz;expires= "+expires;
  ```

- domain

  *domain*表示的是*cookie*所在的域,默认为请求的地址

- path(路径)、

  同一个站点下无法读取其他页面的cookie

  ```js
  document.cookie = "name=value;path=path"
  ```

  （1）.path用来设置cookie生效的目录，是一个绝对路径。

  （2）.只有path目录和其子目录下的页面可以访问当前cookie。

  （3）.如果不显式设置path，那么默认就是当前页面所在的目录。

## 历史记录

- `history.back()`
- `history.forward()`
- `history.go(n)`

html5新增的方法

通过修改`hash`和`hashchange`事件来实现历史记录管理

1. `pushState`

   `history.pushState(state, title, url);` 添加一条历史记录, 更新url路径，但是不会更新页面

2. `replaceState`

   `history.replaceState(state, title, url); `替换当前历史记录

参数：

state：一个与指定网址相关的状态对象，popstate事件触发时，该对象会传入回调函数中。如果不需要这个对象，此处可填null

title：新页面的标题，但是所有浏览器目前都忽略这个值，因此可以填null

url：新的网址，必须与当前页面在同一个域。浏览器的地址栏将显示这个网址

- history上新增的事件

  1、[popstate事件](./demo3.html)

  [*历史记录发生改变时触发*](https://z826526354.github.io/myProject/H5/demo3.html)

  调用`history.pushState()`或者`history.replaceState()`不会触发popstate事件

  2、hashchange事件

  当页面hash值改变的时候触发，常用于构建单页面应用

## [worker](https://z826526354.github.io/myProject/H5/demo4.html)

```js
var worker = new Worker('worker.js');
```

- worker文件必须和主文件满足同源策略

- worker主要处理大量的计算

### worker和主线程之间的通信

- postMessage(n)方法

-  message事件

### 结束worker

- close() 在worker作用域中调用(worker.js) —— 相当于工人辞职
- terminate() 在worker对象上调用 ( 主进程的worker对象上 worker.terminate ) —— 相当于老板炒鱿鱼

### 其他特性

- `improtScripts(./math1.js, './math2.js')`

  worker只是window上的子集，只能实现部分功能，不能获取到window，document，所以不要引入jquery zepto。当然想用的话可以传给子文件

  可以引入一些计算类的库

- 作用域 `WorkerGlobalScope`

  可以继续生成worker对象（FireFox可以chrome暂时不支持）

  `navigator`

  `XMLHttpRequest`

  `setTimeout / serInterval`

- 可以用ajax轮循监听数据变化

### worker的缺点

- 受同源策略限制

- 受到主线程DOM的限制

- worker线程和主线程不在同一个上下文环境，它不能直接通信，必须通过消息完成

- 脚本限制：worker线程不能执行`alert`或者`confirm`， 但是可以使用`XMLHttpRequest` 对象发出的ajax请求

- 文件限制：worker线程无法读取本地文件，既不能打开本机的文件系统，他所加载的脚本必须来自网络

  

## fileReader

读取文件

### fileReader的使用方法

`abort() `终止读取

`readAsBinaryString(file)`将文件读取为二进制编码

`readAsDataURL(file)` 将文件读取为DataURL编码

`readAsText(file, [encoding])` 将文件读取为文本

`readAsArrayBuffer(file)` 将文件读取为ArrayBuffer



### fileReader可实现的功能



## websocker



## 地理位置信息



## 移动端事件处理

