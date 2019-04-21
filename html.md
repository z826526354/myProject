### html4的以及html5 的一些新增初始标签

```html
<!DOCTYPE html>   
<!-- 声明文档的解析类型(document.compatMode)，避免浏览器的怪异模式 -->
<!-- document.compatMode：
		BackCompat：怪异模式，浏览器使用自己的怪异模式解析渲染页面。
		CSS1Compat：标准模式，浏览器使用W3C的标准解析渲染页面。-->
```



​		这个属性会被浏览器识别并使用，但是如果你的页面没有DOCTYPE的声明，那么compatMode默认就是BackCompat,

​		这也就是恶魔的开始————浏览器按照自己的方式解析渲染页面，那么，在不同的浏览器就会显示不同的样式。
​		如果你的页面添加了<!DOCTYPE html>那么，那么就等同于开启了标准模式，那么浏览器就得老老实实的按照W3C的标准解析渲染页面，这样一来，你的页面在所有的浏览器里显示的就都是一个样子了。
​		这就是<!DOCTYPE html>的作用 -->

```html
<html lang="en">
```

 向搜索引擎表示该页面是html语言，并且语言为英文网站，其"lang"的意思就是“language”，语言的意思，
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


	
	
