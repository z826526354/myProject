## vue-组件

定义：已经写好的，供我们修改使用，这些具备复用性高，易于修改、维护。比如 [element](https://element.eleme.cn/#/zh-CN/component/installation)

[滴滴开源组件库](https://didi.github.io/)

- 全局定义一个组件 / 指令

  **一定要写在一个Vue实例下**

  注意：这是一个html模板需要遵循html的规则，比如：span 标签不能嵌套 div，

  但是字符串模板不一样，写成什么呀就是什么样

  ```html
  <div id="demo">
  	<my-component name="hsz" num="num"></my-component>
      <!-- 用户层可以通过操作name属性改变自己的昵称 相当于一个封闭的作用域
  	但是要注意避免直接操作name值, 例如操作num那样间接改变
  	-->
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  <script>
      // 参数：组件名, 组件设置
  	Vue.component("my-component", {
          template: `<div>
  			<p>我是一个组件</p>
  			<button @click="count++">{{count}}</button>
      		<p>{{name}}</p>
      	</div>`,
          data : function () {
              // 这里的data属性规定必须是个函数
              return {
                  count : this.num
              }
          },
          props : {
              // 这里的属性相当于我们提供的接口
          	name : {
                  type : String,
                  // 权限设置 String
                  require : true // 必须填写
              },
              num : {
                  type : Number,
                  default : 0
              }
          }
      })
      Vue.directive("focus", {
          update() {
              console.log(333);
          }
      })
  	new Vue({
          el : "#demo", // Vue实例
      })
  </script>
  ```

- 局部组件 / 指令

  ```html
  <div id="demo">
      <div></div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  <script>
      
  	new Vue({
          el : "#demo", // Vue实例
          components : {
          	"hsz" : {
          		template : `<div>我是一个局部组件,只在#demo好使</div>`
      		}
      	},
          directives : {
              focus : {
                  update() {
                      console.log(123);
                  }
              }
          }
      })
  </script>
  ```

- [自定义事件](https://z826526354.github.io/myProject/vuejs/demo/shijian.html)——类似 jQuery的 trigger

  ```html
  <body>
  	<div class="demo">
  		{{total}}
  		<hsz @add_total="add"></hsz>
  		<hsz @add_total="add"></hsz>
  	</div>
  	<script src="https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.js"></script>
  	<script>
  		Vue.component("hsz", {
  			// 点击一次执行一次 addCount 函数，
  			// 同时触发绑定的自定义事件 add_total
  			template : `
  			<div>
  				<button @click="addCount">{{count}}</button>
  			</div>
  			`,
  			data() {
  				return {
  					count : 0
  				}
  			},
  			methods : {
  				addCount() {
  					this.count ++;
  					// 自定义事件
  					this.$emit("add_total")
  					// 执行自定义事件
  				}
  			}
  		}) // 功能 点击按钮 就加1
          
  		new Vue({
  			el : ".demo",
  			data : {
  				total : 0
  			},
  			methods : {
  				add () {
  					this.total ++;
  				}
  			}
  		}) // 功能 获取总和
  
  	</script>
  </body>
  ```

  ### [element组件示例](https://z826526354.github.io/myProject/vuejs/demo/element_tanchuang.html)

  ### [element组件示例代码](./demo/element_tanchuang.html)

