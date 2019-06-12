## SVG

svg：矢量图（放大不失真），适合大面积的贴图，通常动画少或者较简单，用标签和css作图

canvas：适用于小面积绘图，适合动画

#### 直线

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
        line {
            stroke: black;
            stroke-width: 3px;
            stroke-opacity: 0.5;
            fill-opacity: 0.3;
            stroke-linecap: square;
            stroke-linejoin: round;
            /*这跟canvas的stroke功能相同*/
            stroke-dasharray: 10px;
            stroke-dashoffset: 10px; 
            /*虚线，虚线偏移量*/
        }
	</style>
</head>
<body>
    <svg width="500" height="500" style="border: 1px solid black">
        <line x1="100" y1="100" x2="200" y2="100"></line>
    </svg>
</body>
```

#### 矩形

```html
<rect x="50" y="50" width="100" height="100" rx="10" ry="10">
<!-- 起始位置 大小  圆角（x, y方向） —— 这些可以闭合的标签默认自带填充-->
</rect>
```

#### 圆、椭圆

```html
<circle r="50" cx="220" cy="100"></circle>
<ellipse rx="100" ry="50" cx="400" cy="150"></ellipse>
```

#### 折线

```html
<polyline points="300 300, 400 50, 400 100, 500 50" style="fill:transparent;stroke:red;"></polyline>
<!-- 直线，默认闭合填充,配合css取消填充 -->
```

#### 多边形、文字

```html
<polygon points="300 300, 400 50, 400 100,500 50"></polygon>
<!-- 闭合多边形 -->

<text x="405" y="220">hello,world</text>
```

#### path

```html
<path d="M 100 200 A 60 60 0 1 1 200 200"></path>
<!-- 起始点：x坐标 y坐标  圆弧：x半径 y半径 旋转角度 优(劣)弧 顺(逆)时针 圆心坐标-->

<!-- 大写表示绝对位置，小写表示相对位置
H 横向移动  V（一个参数）纵向移动   z（不分大小写）闭合区间
L lineTo()   A arcTo()
-->
```

#### 渐变

````html
<defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" style="stop-color: rgb(255, 255, 0);"/>
        <stop offset="100%" style="stop-color: rgb(25, 255, 2);"/>
    </linearGradient>
    <!-- 渐变必须写在defs里面 -->
</defs>
<rect x="0" y="0" width="200" height="200" style="fill: url(#bg1)"/>
````

#### 高斯模糊

```html
<defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" style="stop-color: rgb(255, 255, 0);"/>
        <stop offset="100%" style="stop-color: rgb(25, 255, 2);"/>
    </linearGradient>
    
    <filter id="Gaussian">
        <feGaussianBlur in="SourceGraphic" stdDeviation="20">
        </feGaussianBlur>
    </filter>
    <!-- 渐变必须写在defs里面 -->
</defs>
<rect x="0" y="0" width="200" height="200" style="fill: url(#bg1);filter:url(#Gaussian)"/>
```

#### 虚线 进度条

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
        line {
            stroke: #f40;
            stroke-width: 10px;
            /*这跟canvas的stroke功能相同*/
            stroke-dasharray: 200px;
            stroke-dashoffset: 200px; 
            /*虚线，虚线偏移量*/
            animation: move 1s ease infinite alternate-reverse;
        }
        @keyframes move{
			from{
				stroke-dashoffset: 200px;
			}
			to{
				stroke-dashoffset: 0;
			}
		}
	</style>
</head>
<body>
    <svg width="500" height="500" style="border: 1px solid black">
        <line x1="100" y1="100" x2="300" y2="100"></line>
    </svg>
</body>
```

#### 可视区（比例尺）

viewbox

```html
<svg width="500" height="500" viewBox="0, 0, 250, 250" style="border: 1px solid black">
    <!-- 现在已经发大了2倍 -->
    <rect height="50" width="100" x="0" y="0" rx="10"></rect>
</svg>
```



