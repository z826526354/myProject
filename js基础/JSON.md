## JSON

- JSON是一种数据传输的格式（以对象喂养版，本质上就是对象，但用途有区别，对象就是本地用的，JSON是用来传输的）

- 格式

  属性名必须加双引号，属性值最好加

  ```JSON
  {
  	"name" : "hsz",
  	"age" : 123
  }
  ```

  我们传输给后台的是字符串，后台传输给咱们的也是字符串，只不过是JSON格式的字符串`'{"name" : "hsz", "age" : 123}'`, 下面这两种方法就是用来转化的

- `JSON.parse();`       string ——> json

- `JSON.stringify();`       json ——> string

### renderTree

##### 一. DOM树的完成（2步）

1 dom树的解析完成，

2 dom树的加载完成

- dom树的解析

  1 ） html解析原则：深度优先原则，一条道走到底

  2 ） 识别到了就丢到dom树上去, 比如`<img src="">`, dom树不会去管src的内容，认识`<img>`就完事了

##### 二. CSS树（跟DOM树类似）

##### renderTree = DOMTree + CSSTree

**当renderTree形成完成后，JavaScript引擎才会开始真正开始绘制页面，按照renderTree里面的每一条规则去绘制页面**

##### 三 .renderTree的重排（reflow）和重绘（repaint）

renderTree的重排会降低代码运行的效率

1）dom节点的删除，增加

2） dom节点的宽高变化，位置变化

3） offsetLeft offsetWidth（因为要求实时获取，所以要不断重排）

renderTree重绘会极少的降低效率（可以接受）

dom节点的颜色改变



## 异步加载

为什么js的加载过程和运行过程不能和html、css并行去做呢？

因为js会修改html和css，要么绘制完了运行，要么运行完了继续绘制



为什么`<script></script>` 要放在最后呢？

因为如果放在head里面，但凡js里面有一个字节没加载过来，整个页面就废掉了



#### 异步加载三个方案

1）defer 异步加载，但要等到dom文档全部解析完才会被执行。可以加载内部脚本

```html
<script type="text/javascript" src="" defer="defer">
	// 但是很遗憾，只有IE9以下可以用
</script>
```

加上defer后就可以和html，css同时加载了

2） async 异步加载，加载完就执行，async只能加载外部脚本，不可以加载`<script>`的内部脚本

```html
<script type="text/javascript" src="" async="async">
	// W3C标准方法，只能加载外部脚本
</script>
```



<u>**上面俩，执行时也不会阻塞页面**</u>



3）动态创建script，插入到dom中，加载完毕后callback（最常用），还可以按需加载

```js
var script = document.createElement('script');
script.type = "text/javascript";
script.src = "./xxx.js"; // 开始下载"xxx.js"
document.head.appendChild(script); // 开始执行"xxx.js"
```

如果我们想要执行xxx.js里面的方法的话，就需要等到xxx.js下载完成才可能执行

当然我们也有这样的方法

```js
script.onload = function () {} // 就IE不好使

script.onreadystatechange = function () {
    if(script.readState == "complete" || script.readyState == "loaded"){
        // ie独有
    }
}
```

我们可以封装到一起

```js
function loadScrpit(url, callback) {
    var script = document.createElement('script');
    script.type = "text/javascript";
    if (script.readyState) {
        script.onreadystatechange = function () {
            if(script.readState == "complete" || script.readyState == "loaded"){
                // 1 callback();// ie独有
                // 2 eval(callback);
                tools[callback]();
            }
        }
    }else {
        script.onload = function () {
            // 1 callback();
            tools[callback]();
        }
    }
    script.src = url;// 开始下载"xxx.js"
    document.head.appendChild(script); // 开始执行"xxx.js"
}
// 1 loadScrpit('tools.js', function () {test()})
// 2 loadScrpit('tools.js', "test()");
loadScrpit('tools.js', "test");

// 但是第三种要求这样写函数体
var tools = {
    test : function () {console.log('a');},
    demo : function () {};
}
```



## js 加载时间线

- 1 创建`Document`对象，开始解析对象，开始解析web页面。解析HTML元素和他们的文本内容后，添加Element对象和Text节点到文档中，这个阶段`document.readyState = 'loading'`.
- 2 遇到link外部css，创建线程加载，并继续解析文档。
- 3 遇到script外部js，并且没有设置async、defer。浏览器加载并阻塞，等待加载完成并执行该脚本，然后继续解析文档。
- 4 遇到script外部js，并且设置有async、defer。浏览器创建线程加载，并继续解析文档。对于async属性的脚本，<u>脚本加载完成后执行</u>。（异步禁止使用`document.write()`）
- 5 遇到img等，先正常解析dom结构，然后浏览器异步加载src，并继续解析文档。
- 6 当文档解析完成，`document.readyState = 'interactive'`。
- 7 文档解析完成后，所有设置有defer的脚本会按照顺序执行。（注意与async不同，但同样禁止`document.write()`）。
- 8 document对象触发DOMContentLoaded事件，这也标志着程序执行从 同步脚本执行阶段 转化为事件驱动阶段。(只在addEventListener()好用)
- 9 当所有async的脚本加载完成并执行后、img的加载完成后，`document.readyState = 'complete'`，window对象触发load事件。
- 10 从此，以异步响应方式处理用户输入、网络事件等。 