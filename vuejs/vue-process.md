### 声明式渲染

- 命令式编程

  命令“机器”如何去做事情（how），这样不管你想要的是什么（what），它都会按照你的命令实现

  ```js
  var arr = [1, 2, 3];
  for (var i = 0; i < 3; i ++) {
      console.log(arr[i]);
  }
  ```

  

- 声明式编程

  高数“机器”你想要的是什么（what），让机器想如何去做（how）。

  ```js
  arr.forEach(function (item) {
      console.log(item);
  })
  ```

  vue就是典型的声明式编程

### 模板

- html模板

  ```html
  <body>
      <div id="demo">
          <div v-bind:class = "{box:cla}"></div>
      </div>
  	<div v-html="message"></div>
  </body>
  <script>
  	var vm = new Vue({
          el : "#demo",
          data : {
              message : '<div>hellow world{{cla}}</div>',
              // 仅仅只能解析字符串
              // 如果我们要插入dom节点的话
              // 必须要通过  v-html
              cla : true
          },
      })
  </script>
  ```

  

- 字符串模板

  ```html
  <body>
      <div id="demo">
          <div v-bind:class = "{box:cla}"></div>
      </div>
  	<div v-html="message"></div>
  </body>
  <script type="x/template" id="template1"><div>hellow world{{cla}}</div></script>
  <script>
  	var vm = new Vue({
          el : "#demo",
          data : {
              message : '<div>hellow world{{cla}}</div>',
              cla : true
          },
          template : "#template1"
          // 会替换掉我们上面所创建的 #demo
  		// template: "#template1"
      })
  </script>
  ```

  

- render 函数

  ```html
  <body>
      <div id="demo">
          <div v-bind:class = "{box:cla}"></div>
      </div>
  </body>
  <script type="x/template" id="template1"><div>hellow world{{cla}}</div></script>
  <script>
  	var vm = new Vue({
          el : "#demo",
          data : {
              message : '<div>hellow world</div>',
              cla : true
          },
          // 使用render函数的时候就不可以在像以前一样使用： v-for等属性；但是有其他的解决方法
          // 最接近底层的模板，会更加高效，
          // 但是没有 html模板 方便
          // 一般写高效组件的时候才用render方法
          render(createElement) {
              var dom = createElement("div", {
                  attrs: {
                      id: "box"
                  },
                  class: {
                      vue1: true,
                      vue2: false
                  },
                  // domProps 优先级最高，会覆盖上面的
                  // domProps: {
                  // 	innerHTML: "<div>html</div>"
                  // }
                  // 接下来的子元素将会被完全覆盖
              }, ["hellow", createElement("p", ["world"])])
              return dom;// 渲染到页面
          }
      })
  </script>
  ```

- #### [简单vue示例](https://z826526354.github.io/myProject/vuejs/demo/vue-example.html)

[代码](./demo/vue-example.html)

