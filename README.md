# web前端

我是2020届的前端，这是我平时的一些心得 还有基础知识的积累，至今还在 **<u>不断更新中</u>**。。。

点一下star★ 是对我的鼓励，同时也不容易弄丢链接哦

有疑问的道友也是可以 微信 我：826526354

#### [git常用命令](https://github.com/z826526354/myProject/blob/master/git.md)

#### [CSS3](https://github.com/z826526354/myProject/tree/master/css3)

#### [性能优化——防抖节流](https://github.com/z826526354/myProject/blob/master/jieliu/节流防抖.md)

#### [node之event事件 原理探究](https://github.com/z826526354/myProject/blob/master/event.md)

#### [vue](https://github.com/z826526354/myProject/tree/master/vuejs)

#### [HTML5](https://github.com/z826526354/myProject/tree/master/H5)

#### [es6](https://github.com/z826526354/myProject/tree/master/es6)

#### [函数体现的一些思想](https://github.com/z826526354/myProject/tree/master/组合函数.md)

#### [gulp4.0 配置](https://github.com/z826526354/myProject/blob/master/gulp4.0.md)

#### [gulp&zeptojs的音乐播放器](https://z826526354.github.io/myProject/music/html/index.html)

#### [京东首页例子](https://z826526354.github.io/myProject/jingdongPage/jingdong.html)

#### [bootstrap的兼容性例子](https://z826526354.github.io/myProject/bootstrapPage/demo2.html)

#### [JSONP跨域模拟百度例子](https://z826526354.github.io/myProject/网络/demo2.html)

#### [网络部分](https://github.com/z826526354/myProject/tree/master/网络)

#### [js基础](https://github.com/z826526354/myProject/tree/master/js基础)

#### [html](https://github.com/z826526354/myProject/tree/master/html)

#### [CSS(层叠样式表)](https://github.com/z826526354/myProject/tree/master/css)

## 

**触发浏览器使用GPU在另一个层面绘制图形**

一般情况下：transform: translateZ(0);就足够了



**专业GPU加速：**

**will-change:transform;**

——兼容性不太好，未来会常用

```css
div{
	width: 100px;
    height: 100px;
}
div: hover{
	will-change: transform;
}
div:active{
	transform: scale(2,3);
}
```



当鼠标移入触发，移出消除，这是最完美的方法，而且要在紧挨着执行之前写，不然浏览器会一直等

浏览器刷新频率1s——60次

平均每16.7毫秒刷新一次页面

gpu可以再一帧里渲染好页面，那么当你改动页面的元素或者实现动画的时候，将会非常流畅

## 

- #### [小程序简介（Hybrid）](https://github.com/z826526354/myProject/tree/master/wechatApp/wechatApp.md)

  1）限制大小在1M以内

  2）相比传统App 不需要大流量下载

  3）只能在微信里面使用（这也是不能火起来的原因，自己的用户全都被绑定在微信里面了）

  4）很多权限没有开放给开发者（至少目前）

  5）语言Object C （ios） + html  受限制于UIWebView

- #### 传统App简介（Native）

  1）大小不限制，甚至大多数都很大，占用手机内存多

  2）开发者权限很大，可以调用很多底层接口

  3）性能好，直接请求cpu资源

  4）实现一个应用App的话要写两套iOS（object C）和Android（java）

- #### 网页App （webApp）

  1）性能比不上上面俩大哥

  2）底层接口无法调用

  3）但是更新无需下载

  3）无需安装，直接浏览器访问

#### 小程序适合做哪些应用？

- 简单，用完即走
- 简单低频
- 性能要求不高

（投票，打车，评分，新闻）

## 

## [节流&防抖](https://github.com/z826526354/myProject/blob/master/jieliu/节流防抖.md)

在前端开发中有一部分用户会频繁触发事件执行，对于DOM操作、资源加载等耗费性能的处理，很可能导致页面卡顿，甚至浏览器崩溃。函数节流（throttle）和函数防抖（debounce）就是为了解决类似需求应运而生