## iframe

- iframe就是一个标签dom元素

- 可以一个网页里面嵌入另一个网页

  导航栏tab切换页（古老的做法）， 在线编辑器，广告植入

  在腾讯中很多登入页面都是iframe嵌套进来的

- 历史记录管理器，解决ajax化网站响应浏览器前进后退按钮的方案

- 跨域通行等

### iframe的利弊

iframe阻塞页面加载

- 触发window的onload事件是非常重要的。onload事件触发是浏览器的"忙"指示器停止，告诉用户当前网页已经加载完毕。当onload事件加载延迟后，他给用户的感觉就是这个网页非常慢
- window的onload事件需要在所有的iframe加载完毕后（包含里面的元素）才会触发。通过JavaScript动态设置iframe的src可以避免这种情况。
- 解决跨域问题这个很牵强。。。其实它已经不怎么用了

### 如何获取iframe内的window

- 获取子窗口

  ```html
  <iframe src="" frameborder="0" name="name" id="id"></iframe>
  
  <script>
  document.getElementsByTagName('iframe')[0].contentWindow
  document.getElementsByTagName('id').contentWindow
  
  // 简易写法——部分浏览器不支持
  window.frames['iframe的name']
  
  // IE专用
  document.iframs['name'].contentWindow
  document.iframs[i].contentWindow
  
  // 想要获取到iframe里面的变量，必须满足同源状态下
  </script>
  
  ```

- 父子页面窗口的关系

  ```js
  window.self
  // 就是自己（怪异的属性）
  
  window.parent
  // 父级窗口对象
  
  window.top
  // 顶级窗口对象
  ```

- 判断iframe加载完成

  ```js
  // 非IE下使用onload事件
  iframe(dom元素).onload = function () {}
  
  // IE下使用onreadystatechange或者设置定时器
  iframe.onreadystatechannge = function () {
      if (iframe.readyState == "complate" || iframe.readyState == "loaded") {
          alert("Local iframe is now loaded");
      }
  }
  ```

- iframe跨域获取信息

  这种方式是很不安全的，因为是暴露的

  ```html
  <iframe src="***/IF2.html" frameborder="0" name="name" id="id"></iframe>
  
  <script>
      // 主页面IF1
      var oIframe = document.getElementsByTagName('iframe')[0]
      var oldAge = 100;
      /*
      var oSrc = oiframe.src
      document.onclick = function () {
          oIframe.src = oSrc + "#" + oldAge;
          oldAge ++;
      }
      */
      /*
      在不同源的情况下需要借助window.name来跨域
  	但是还需要借助其他的iframe页面来作为中介
      */ 
      var flag = true;
      oIframe.onload = function () {
          if (flag) {
              oIframe.src = './IF3.html';
              flag = false
          }else {
              console.log(oIframe.contentWindow.name)
          }
      }
  </script>
  
  <script>
  // 另一个页面 IF2.html
      var age = 20;
      
      /*
      var lastHash = window.location.hash;
      setInterval(function () {
          if (lastHash != window.location.hash.slice(1)) {
  			console.log(loaction.hash)
          }
      }, 10)
      //很耗性能
      */
      window.name = age;
  </script>
  
  <script>
      // IF3页面
  </script>
  ```

- iframe手跨域限制如何解决

  ```
  1 document.domain : 解决跨域限制最好的办法
  2 window.location.hash : 解决子页面访问父页面数据问题
  3 window.name : 解决父页面访问子页面数据问题
  4 H5 PostMessage --> 详情看离线缓存
  ```

  

