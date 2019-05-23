## 深入jsonp跨域问题

### 解决跨域问题的几种方法

示例

1 Flash（不做详细介绍）

2 服务器代理中转

```
同源策略是浏览器与服务器之间，但是限定不了服务器与服务器之间
浏览器借用自己的后台文件与其他服务器后台文件建立联系就是 —— 服务器代理中转
```

3 Jsonp

4 document.domain（针对基础域名相同的情况）

```
bj.58.com  document.domain = '58.com'
tj.58.com  document.domain = '58.com'
```



### JSONP原理

```
1 web页面上用<script>引入js文件时，则不受是否跨域的影响（不仅如此，凡是带有'src'属性的标签都拥有跨域的能力，比如<script>、<img>、<ifram>）

2 于是我们把数据放到服务器上，并且数据为json形式（因为js可以轻松处理json数据）

3 因为我们无法监控通过<script> 的src属性是否把数据获取完成，所以我们需要做一个处理。

4 实现定义好处理跨域获取数据的函数，如 function doJSON(data) {}

5 用src获取数据的时候添加一个参数 cb = 'doJSON'(服务端会根据参数cb的值返回对应的内容) 此内容为 以cb对应的值doJSON 作为函数真实要传递的数据 作为函数的参数的遗传字符 如：doJSON（'数据'）
```



#### 通过动态创建script标签引入数据

```html
html文件:
<script>
	var oScript = document.createElement('script');
	oScript.src = './data/index.txt?cb=aa&keyword=hsz'
    // 告诉后台回调函数名为 aa 关键字为 hsz
	document.body.appendChild(oScript);
	function aa(data) {
		console.log(data)
	}
    
    oScript.src = './data/index.txt?cb=bb&keyword=hsz'
    // 告诉后台回调函数名为 bb 关键字为 hsz
	document.body.appendChild(oScript);
	function bb(data) {
		console.log(data)
	}
</script>
```

```
txt文件:
// 后台做成这种函数执行的模式
aa({"name" : "hsz"});
bb({"name" : "xiuxiu"});
```

