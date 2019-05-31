## 滚动条

查看滚动条的滚动距离

- `window.pageXOffset / pageYOffset`

  IE 8 及 iIE8以下不兼容

- `document.body / documentElement.scrollLeft / scrollTop`

  兼容性比较混乱呢，用时取俩值相加，因为不可能存在两个同时有值

- 封装兼容性方法，求滚动轮滚动距离 `getScrollOffset()`

  ```js
  function getScrollOffset() {
  	if (window.pageXOffset) {
  		return {
  			x : window.pageXOffset,
  			y : window.pageYOffset
  		}
  	}else {
  		return {
  			x : document.body.scrollLeft + document.documentElement.scrollLeft,
  			y : document.body.scrollTop + document.documentElement.scrollTop,
  		}
  	}
  }
  ```

让滚动条滚动

- window上有3个方法

  `scroll()`,`scrollTo()`,`scrollBy()`

  三个方法功能类似，用法都是x, y 坐标传入。即实现让滚动轮滚动到当前位置。

  区别：`scrollBy()`会在之前的数据基础之上做累加

- eg ： 可以利用scrollBy() 快速阅读的功能

## 视口

查看视口尺寸

- `window.innerWidth/innerHeight`

  IE8及IE8以下不兼容

- `document.documentElement.clientWidth / clientHeight`

  标准模式下，任意浏览器都兼容

- `document.body.clientWidth / clientHeight`

  适用于怪异模式下的浏览器

- 封装兼容性方法，返回浏览器视口尺寸`getViewportOffset()`

  ```js
  function getViewportOffset() {
  	if (window.innerWidth) {
  		return {
  			w : window.innerWidth,
  			h : window.innerHeight
  		}
  	}else {
  		if (document.compatMode === "BackCompat") {
  			return {
  				w : document.body.clientWidth,
  				h : document.body.clientHeight
  			}
  		}else {
  			return {
  				w : document.documentElement.clientWidth,
  				h : document.documentElement.clientHeight
  			}
  		}
  	}
  }
  ```



#### 元素尺寸

查看元素几何尺寸

- `domEle.getBoundingClientRect()`

  兼容性很好

  该方法返回一个对象，对象里面有`left、top、right、bottom`等属性。`left`和`top`代表该元素左上角的`X`坐标和`Y`坐标，`right`和`bottom`代表该元素右下角的`X`坐标和`Y`坐标。 

  `height`和`width`属性老IE并未实现

  返回的结果并不是实时的

查看元素尺寸  (  视觉上的尺寸  )

- `dom.offsetWidth, dom.offsetHeight`

**查看元素位置**

- `dom.offsetLeft, dom.offsetTop`

  对于无定位的父级元素，返回相对文档的坐标。对于有定位父级的元素，返回相对于最近的有定位的父级的坐标。<u>无论自身有没有定位，但凡与父级或者文档有距离就返回这个距离</u>

- `dom.offsetParent`

  返回最近的由定位的父级，如果没有，返回`body`，`body.offsetParent`返回`null`。

- eg : 求元素相对于文档的坐标 `getElementPosition`

  

## 脚本化css

dom.style（获取的是行间样式）

- 可读可写
- 注意`background-color` 等，带 '-' 号的组合样式, 要小驼峰式命名`backgroundColor`
- 碰到float这样的保留字属性，前面加css ------> `dom.style.cssFloat =  left;`
- 复合属性（一个样式包含多个属性，比如`border`）尽量拆开写

查询计算样式（已经计算完了，比如 em ---> px）

- `window.getComputedStyle(ele, null)[prop];`

- 这个方法可以获取伪元素的样式

  ```js
  window.getComputedStyle(div, 'after').width // 这样就可以获取了
  ```

  

- 计算样式只读（视觉上展示给我们的样式会展示出来，包括默认值）

- 返回的计算样式的值都是绝对值，没有相对单位

- IE8及IE8以下不兼容

  IE：`dom.currentStyle[prop]`但是并非是计算后的属性

```js
// 封装兼容的 查询计算样式
function getStyle(elem, prop) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(elem, null)[prop];
	}else {
        return elem.currentStyle[prop];
    }
}
```



