### html4的以及html5 的一些新增初始标签

```html
<!DOCTYPE html>   
<!-- 声明文档的解析类型(document.compatMode)，避免浏览器的怪异模式 -->
<!-- document.compatMode：
		BackCompat：怪异模式，浏览器使用自己的怪异模式解析渲染页面。
		CSS1Compat：标准模式，浏览器使用W3C的标准解析渲染页面。-->
```

这个属性会被浏览器识别并使用，但是如果你的页面没有DOCTYPE的声明，那么compatMode默认就是BackCompat,

这也就是恶魔的开始————浏览器按照自己的方式解析渲染页面，那么，在不同的浏览器就会显示不同的样式。（向后兼容）

如果你的页面添加了<!DOCTYPE html>那么，那么就等同于开启了标准模式，那么浏览器就得老老实实的按照W3C的标准解析渲染页面，这样一来，你的页面在所有的浏览器里显示的就都是一个样子了。
​		**这就是<!DOCTYPE html>的作用 -->**

```html
<html lang="en">
```

 向搜索引擎表示该页面是html语言，并且语言为英文网站，其"lang"的意思就是language，语言的意思，

而“en”即表示english，当然你也可以写zh——代表中文，不过建议还是写en，毕竟这个主要是给搜索引擎看的，

搜索引擎不会去判断该站点是中文站还是英文站，所以这句话就是让搜索引擎知道，你的站点是中文站，对html页面本身不会有影响

```html
<head> <!--这是被<html>包含的头文件头-->
	<meta charset="UTF-8">
  <!-- 如果你的网页里面出现了中文，在头部没有这一句 的话，将会导致中文乱码。
  因此这是编码格式，告诉给浏览器用什么方式来读这页代码。 -->
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=no">
      <!-- name="viewport"—— 视口	 
  content="width=device-width —— 设备宽度（针对安卓）	window Phone IE浏览器，上横竖屏的宽度 = 竖屏宽度 
  initial-scale=1.0 —— 缩放比例（针对iPhone/iPad）iPhone/iPad ，上横竖屏的宽度 = 竖屏宽度
  （因为兼容性的问题要写两个）            
  user-scalable=no —— 不允许用户放大
  作用：将页面大小根据分辨率不同进行相应的调节，减少手机端跟PC端上图像呈现的差异 -->
    
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!-- <meta http-equiv="X-UA-Compatible" content="IE=7">
  #以上代码告诉IE浏览器，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。
  <meta http-equiv="X-UA-Compatible" content="IE=8">
  #以上代码告诉IE浏览器，IE8/9都会以IE8引擎来渲染页面。
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  #以上代码告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面。
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  #以上代码IE=edge告诉IE使用最新的引擎渲染网页，chrome=1将允许站点在使用了谷歌浏览器
  内嵌框架（Chrome Frame）的客户端渲染，对于没有使用的，则没有任何影响。
  目前绝大多数网站都用<meta http-equiv=”X-UA-Compatible” content=”IE=EmulateIE7″ >
  来作为IE8的兼容方法。为了避免制作出的页面在IE8下面出现错误。 -->
    
    <title>Document</title> <!-- 这是网站的名字 -->
  
	<link rel="stylesheet" href="../css/index.css">
    <!-- 外部引入css文件 ， 如果需要在内部写的话，直接<style>写在里面即可</style>-->
</head>
  <!-- head代表头部，那肯定是一些重要的预备工作，那么真正的编写 html 就在body标签里面了，
  body顾名思义 —— 身体，代表着控制一个人的神经系统，那么在html中也是如此-->
```

```html
<body>
	<!-- <div class="wrapper">hello</div> -->
	<img src="../image/lin.jpg" alt="">
	<script src="../js/index.js"></script>
	 <!-- script标签是可以引入外部标签的 —— 通过 src=“” 引入 
 	 如果在内部写的话，直接<script>编写在此处即可</script>-->
</body>
</html>
```



### Html内容标签以及应用

html —— hyperText markup language

  超文本		标记		语言

`&nbsp` —— 空格

`&lt` (less than) —— 小于

`&gt` （great than）—— 大于

`<br>`——回车（单标签）

`<hr> `—— 单横线（单标签）

`<meta>`——（单标签）

`<link>` ——引入标签（单标签）

![img](http://note.youdao.com/yws/public/resource/47b94a7f61d4e4c1c4fbfad5cdf1ed0c/xmlnote/84D9721ADDEC47D790801C3E2359B726/239)

SEO搜索引擎优化技术

```html
<meta content="" name="keywords"> //关键字
```

```html
<meta content="" name="description"> //描述
```



有序列表

```html
<ol reversed="reversed"> // 倒着排序
		<li></li>
		<li></li>
		<li></li>
	</ol>
  <ol start="2"> // 从第二开始排序
		<li></li>
		<li></li>
		<li></li>
	</ol>
  <ol type="a/A/1/I/i"> // 按照不同的顺序来排
		<li></li>
		<li></li>
		<li></li>
	</ol>
```

无序列表

```html
	<ul type="disc"> // 默认实心圆 还有circle（圈）square（方块）
		<li></li>
		<li></li>
		<li></li>
	</ul>
<img src="" alt="" title=""> // ——图片标签（单标签）
```

src——图片地址

alt——图片占位符（当图片报错是展示的文字）

title——图片提示符



##### 超文本`<a href=""></a>`

1.`<a href="" target="_black"></a>`

herf——链接地址

target="_black"——一个属性表示新的页面打开



2.锚点

`<a href="#demo"></a>`——寻找并跳转到ID为demo的位置



3.打电话和发邮件

```html
<a href="tel：159xxxx3725"></a>
<a href="mailto：8265xxxx4@qq.com"></a>
```

4.协议限定符（运行javascript代码）

```html
<a href="javascript:void(false);"></a>
<a href="javascript:alert('a');"></a>
```



新闻标题（已经设置好css的文字格式）

```html
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
```



各种字体标签

```html
<em>50</em>
<span>50</span>
<del>50</del>
<address>50</address>
<strong>50</strong>
<p>50</p>
```

在浏览器中就是这样了

<em>50</em>
<span>50</span>
<del>50</del>

<address>50</address>
<strong>50</strong>

<p>50</p>



form表单

最基础的用户名密码输入框：

```html
<form method="get" action="">
	<p>
		username:<input type="text" name="uesrname" value="请输入用户名">
	</p>
	<p>
		password:<input type="password" name="password">
	</p>
	<input type="submit">
</form>
```





单选题`type="radio"`

多选题`type="checkbox"`

```html
<form method="get" action="">
		<p>你最喜欢的水果是（  ）？</p>
		A. 橘子<input type="radio" name="最喜欢的水果" value="oringe" checked="checked"> // 默认选中
		b. 苹果<input type="radio" name="最喜欢的水果" value="apple">
		c. 香蕉<input type="radio" name="最喜欢的水果" value="banana">
		<input type="submit"> //提交按钮
	</form>
```

name——为了使他们变成同一道题



下拉菜单选项

```html
<form method="get" action="">
	<select name="guojia" id="position">
		<option value="China">中国</option>
		<option value="amrician">美国</option>
		<option value="japan">日本</option>
	</select>
	<input type="submit">
</form>
```



### HTML与浏览器

**Doctype 作用？标准模式与兼容模式各有什么区别?**

DOCTYPE是用来声明文档类型和DTD规范的。<!DOCTYPE html>声明位于HTML文档中的第一行，不是一个HTML标签，处于 html 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

标准模式的排版 和 JS 运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

在HTML4.01中<!doctype>声明指向一个DTD，由于HTML4.01基于SGML，所以DTD指定了标记规则以保证浏览器正确渲染内容 HTML5不基于SGML，所以不用指定DTD

HTML 全局属性

全局属性是所有HTML元素共有的属性; 它们可以用于所有元素，即使属性可能对某些元素不起作用。

[全局属性 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes)



**canvas和svg的区别**

canvas是html5提供的新元素，而svg存在的历史要比canvas久远，已经有十几年了。svg并不是html5专有的标签，最初svg是用xml技术（超文本扩展语言，可以自定义标签或属性）描述二维图形的语言。在H5中看似canvas与svg很像，但是，他们有巨大的差别。

首先，从它们的功能上来讲，canvas可以看做是一个画布。，其绘制出来的图形为标量图，因此，可以在canvas中引入jpg或png这类格式的图片，在实际开发中，大型的网络游戏都是用canvas画布做出来的，并且canvas的技术现在已经相当的成熟。另外，我们喜欢用canvas来做一些统计用的图表，如柱状图曲线图或饼状图等。 而svg，所绘制的图形为矢量图，所以其用法上受到了限制。因为只能绘制矢量图，所以svg中不能引入普通的图片，因为矢量图的不会失真的效果，在项目中我们会用来做小图标。但是由于其本质为矢量图，可以被无限放大而不会失真，这很适合被用来做地图，而百度地图就是用svg技术做出来的。

另外从技术发面来讲canvas里面绘制的图形不能被引擎抓取，如我们要让canvas里面的一个图片跟随鼠标事件: canvas.onmouseover=function(){}。 而svg里面的图形可以被引擎抓取，支持事件的绑定。另外canvas中我们绘制图形通常是通过javascript来实现，svg更多的是通过标签来来实现，如在svg中绘制正矩形形就要用，这里我们不能用属性style="width:XXX;height:XXX;"来定义。



**行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？**

定义：CSS 规范规定，每个元素都有 display 属性，确定该元素的类型，每个元素都有默认的 display 值，如 div 的 display 默认值为“block”，则为“块级”元素；span 默认 display 属性值为“inline”，是“行内”元素。

- 行内元素有：a b span img input select strong（强调的语气）
- 块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p
- 空元素：

- - 常见: br hr img input link meta
  - 不常见: area base col command embed keygen param source track wbr

不同浏览器（版本）、HTML4（5）、CSS2 等实际略有差异 参考: <http://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements>

**页面导入样式时，使用 link 和@import 有什么区别？**

- link 属于 XHTML 标签，除了加载 CSS 外，还能用于定义 RSS, 定义 rel 连接属性等作用；而@import 是 CSS 提供的，只能用于加载 CSS;
- 页面被加载的时，link 会同时被加载，而@import 引用的 CSS 会等到页面被加载完再加载;
- import 是 CSS2.1 提出的，只在 IE5 以上才能被识别，而 link 是 XHTML 标签，无兼容问题;
- link 支持使用 js 控制 DOM 去改变样式，而@import 不支持;

**介绍一下你对浏览器内核的理解？**

主要分成两部分：渲染引擎(layout engineer 或 Rendering Engine)和 JS 引擎。

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入 CSS 等），以及计算网页的显示方式，然后渲染到用户的屏幕上。

JS 引擎则：解析和执行 javascript 来实现逻辑和控制 DOM 进行交互。

最开始渲染引擎和 JS 引擎并没有区分的很明确，后来 JS 引擎越来越独立，内核就倾向于只指渲染引擎。

**HTML5变化**

- [新的语义化元素](http://www.w3school.com.cn/html/html5_new_elements.asp)

- - header footer nav main article section
  - 删除了一些纯样式的标签

- [表单增强](http://caibaojian.com/html5/form.html)
- 新API

- - 离线 （applicationCache ）
  - 音视频 （audio, vidio）
  - 图形 （canvans）
  - 实时通信（websoket）
  - 本地存储（localStorage, indexDB）
  - 设备能力（地图定位，手机摇一摇）

**em 与 i 的区别**

- 效果都是斜体
- em 是语义化标签，表强调
- i 是样式标签， 表斜体

**哪些元素可以自闭合？**

- 表单元素 input
- img
- br, hr
- meta, link

**HTML和DOM的关系**

- HTML只是一个字符串
- DOM由HTML解析而来
- JS可以维护DOM

**property和attribute的区别**

例如一个input标签

```js
 <input value="3" />
```

 他的attribute是3 但如果使用input.value =  4, 或 直接修改值为4，这时再去getAttribute得到的还是"3"

property 和 attribute非常容易混淆，两个单词的中文翻译也都非常相近（property：属性，attribute：特性），但实际上，二者是不同的东西，属于不同的范畴。



property是DOM中的属性，是JavaScript里的对象；

attribute是HTML标签上的特性，它的值只能够是字符串；



**form 作用**

- 直接提交表单

- 使用submit / reset按钮

- 便于浏览器保存表单

- 第三方库可以整体取值

- 第三方库可以进行表单验证

  

**主流浏览器机器内核**

| 浏览器  | 内核           | 备注                                                         |
| ------- | -------------- | ------------------------------------------------------------ |
| IE      | Trident        | IE、猎豹安全、360 极速浏览器、百度浏览器                     |
| firefox | Gecko          |                                                              |
| Safari  | webkit         | 从 Safari 推出之时起，它的渲染引擎就是 Webkit，一提到 webkit，首先想到的便是 chrome，Webkit 的鼻祖其实是 Safari。 |
| chrome  | Chromium/Blink | 在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。Blink 其实是 WebKit 的分支。大部分国产浏览器最新版都采用 Blink 内核。二次开发 |
| Opera   | blink          | Opera内核原为：Presto，现在跟随 chrome 用 blink 内核。       |



##### 简述一下你对 HTML 语义化的理解？

- 用正确的标签做正确的事情。
- html 语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
- 即使在没有样式 CSS 情况下也以一种文档格式显示，并且是容易阅读的;
- 搜索引擎的爬虫也依赖于 HTML 标记来确定上下文和各个关键字的权重，利于 SEO;
- 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。



##### 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

- cookie 是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）
- cookie 数据始终在同源的 http 请求中携带（即使不需要），记会在浏览器和服务器间来回传递。
- sessionStorage 和 localStorage 不会自动把数据发给服务器，仅在本地保存。
- 存储大小：

- - cookie 数据大小不能超过 4k。
  - sessionStorage 和 localStorage 虽然也有存储大小的限制，但比 cookie 大得多，可以达到 5M 或更大。

- 有效期（生命周期）：

- - localStorage: 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
  - sessionStorage: 数据在当前浏览器窗口关闭后自动删除。
  - cookie: 设置的 cookie 过期时间之前一直有效，即使窗口或浏览器关闭

- 共享

- - sessionStorage不能共享，localStorage在同源文档之间共享，cookie在同源且符合path规则的文档之间共享

    

##### html 中 title 属性和 alt 属性的区别？

```js
<img src="#" alt="alt信息" />
```

当图片不输出信息的时候，会显示 alt 信息 鼠标放上去没有信息，当图片正常读取，不会出现 alt 信息。

```js
<img src="#" alt="alt信息" title="title信息" />
```



- 当图片不输出信息的时候，会显示 alt 信息 鼠标放上去会出现 title 信息；
- 当图片正常输出的时候，不会出现 alt 信息，鼠标放上去会出现 title 信息。
- 除了纯装饰图片外都必须设置有意义的值，搜索引擎会分析。

另外还有一些关于 title 属性的知识：

- title 属性可以用在除了 base，basefont，head，html，meta，param，script 和 title 之外的所有标签。
- title 属性的功能是提示。额外的说明信息和非本质的信息请使用 title 属性。title 属性值可以比 alt 属性值设置的更长。
- title 属性有一个很好的用途，即为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的。

**为什么我们要弃用table标签？**

table的缺点在于服务器把代码加载到本地服务器的过程中，本来是加载一行执行一行，但是table标签是里面的东西全都下载完之后才会显示出来，那么 如果图片很多的话 就会导致网页一直加载不出来，除非所有的图片和内容都加载完。如果要等到所有的图片全都加载完之后才显示出来的话那也太慢了，所以table标签现在我们基本放弃使用了。

**head 元素**

head子元素大概分为三类，分别是：

- 描述网页基本信息的
- 指向渲染网页需要其他文件链接的
- 各大厂商根据自己需要定制的

**网页基本信息**

一个网页，首先得有个标题，就跟人有名字一样。除此之外，还可以根据实际需要补充一些基本信息。

- 文档标题（浏览器标签中显示的文本）：<title>深入了解 head 元素</title>
- 编码格式： 如果你的页面出现乱码，那一般就是编码格式不对
- 视窗设置：
- 搜索引擎优化相关内容： 
- IE浏览器版本渲染设置：

**其他文件链接**

- CSS 文件：

- JavaScript 文件：

  ```js
  <script src=“script.js"></script>
  ```

但是为了让页面的样子更早的让用户看到，一般把JS文件放到body的底部



同样分享页面到QQ的聊天窗口，有些页面直接就是一个链接，但是有些页面有标题，图片，还有文字介绍。为什么区别这么明显呢？其实就是看有没有设置下面这三个内容

```html
<meta itemprop="name" content="这是分享的标题"/>
<meta itemprop="image" content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png" />
<meta name="description" itemprop="description" content="这是要分享的内容" />
```

**移动端项目需要注意的4个问题**

meta中设置viewport

阻止用户手滑放大或缩小页面，需要在 index.html中添加meta元素,设置viewport。

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
这其实就算是很标准的一个meta标签了
下一篇会细说meta标签的用处
```

**CSS样式统一问题**

我们需要重置页面样式，因为在不同的手机浏览器上，默认的css样式不是统一的。 解决方法：使用reset.css重置所有元素的默认样式

**一像素边框问题**

有的手机分辨率比较高，是2倍屏或3倍屏，手机上的浏览器就会把CSS中的1像素值展示为2个或3个物理宽度 解决方法： 添加一个border.css库，将利用scroll缩放的原理将边框重置。当我们需要使用一像素边框时只需要在标签上添加对应类名，如设置底部一像素边框就在标签上加入"border-bottom"的class名

**300毫秒点击延迟问题**

在移动端开发中，某些机型上使用click事件会延迟300ms才执行，这样影响了用户体验。 解决方法： 引入[fastclick.js](https://www.jianshu.com/p/05b142d84780)。