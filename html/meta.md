## 细说meta标签



```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
以上代码告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面。
```



```html
<meta http-equiv="X-UA-Compatible" content="IE=7">
以上代码告诉IE浏览器，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。
```



```html
<meta http-equiv="X-UA-Compatible" content="IE=8">
以上代码告诉IE浏览器，IE8/9都会以IE8引擎来渲染页面。
```



```
<meta http-equiv="X-UA-Compatible" content="IE=Edge, chrome=1">

以上代码IE=edge告诉IE使用最新的引擎渲染网页，chrome=1将允许站点在使用了谷歌浏览器
内嵌框架（Chrome Frame）的客户端渲染，对于没有使用的，则没有任何影响。
目前绝大多数网站都用<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7">
来作为IE8的兼容方法。为了避免制作出的页面在IE8下面出现错误
```



```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

device-width：设备宽度
device-height：设备高度
width: 视口的宽度
hieght: 视口的高度
user-scalable：是否允许用户缩放yes / no
initial-scale：页面初始缩放值（可以带小数）
minimum-scale：页面最小缩放比（可以带小数）
maximum-scale：页面最大缩放比（可以带小数）



#### **有时大家会见到同时写了不允许缩放，又写了最小缩放比，那这不是冲突了？**

#### 为什么都已经写了不允许缩放还有写那些？

1. 有一些第三方工具能够破坏user-scalable, 比方说一些给父母的手机把蚊子放大的工具，就会有可能，
不过一般没可能
2. 像iPhone5下会有黑边
3. 所以写全了，可以避免一些bug

ios10不支持user-scalable=no
initial-scaleble有值的情况下算页面的公式
缩放比 = css像素 / viewport宽度



```html
<meta name="format-detection" content="telephone=no, email=no">
禁止识别电话与邮箱(但是邮箱没效果)
```



```html
<meta name="apple-mobile-web-app-title" content="标题">
添加到主屏后的标题(ios)
```



```html
<meta name="apple-mobile-web-app-capable" content="yes">
添加到主屏后, 全屏显示, 删除苹果默认的工具栏和菜单栏(无用)
```



```html
<link rel="app-touch-icon-precomposed" href="./demo/lihong.jpg">
放在桌面上的logo
```



```html
<link rel="app-touch-startup-img" href="./demo/lihong.jpg">
启动时的动画(无用)
```


```html
<meta name="x5-orientation" content="portrait">
设置x5内核浏览器只能竖屏浏览 (只有UC有效)
```



```html
<meta name="x5-fullscreen" content="true">
设置x5内核浏览器全屏浏览
```



```html
<meta name="screen-orientation" content="portrait">
设置UC浏览器只能竖屏浏览
```



```html
<meta name="full-screen" content="yes">
设置UC浏览器全屏浏览
```

