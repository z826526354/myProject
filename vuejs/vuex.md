# vuex

### vuex是什么？

- Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式

- 采用集中式存储管理应用的所有组件的状态

- 并以相应的规则保证状态以一种可预测的方式发生变化



### vue使用状态

- 组件内部状态：仅在一个组件内使用的状态

- 应用级别状态：多个组件公用的状态



### 什么情况下使用vuex

- 多个视图依赖于同一状态。

- 来自不同视图的行为需要变更同一状态。



### vuex使用

- 安装vuex模块

```
npm install vuex --save
```

- 作为插件使用

```
Vue.use(Vuex)
```

- 定义容器

```
new Vuex.Store()
```

- 注入根实例

```
{
	store
}
```



### vuex核心概念

- store：

  类似容器，包含应用的大部分状态

​        一个页面只能有一个store

​        状态存储是响应式的

​        不能直接改变store中的状态，唯一的途径是显示的提交mutations

- state：包含所有应用级别状态的对象

  ```js
  computed: {
      num () {
          return this.$store.state.count
      }
  }
  ```

  

- getters：在组件内部获取store中状态的函数

- mutations：唯一修改状态的事件回调函数

  ```
  add(){
  	this.$store.commit('addAction')
  	// commit触发
  }
  ```

  

- actions：包含异步操作、提交mutations改变状态

  ```add(){
  add(){
  	this.$store.dispatch('addAction')
  	// dispatch触发
  }
  ```

- modules ：将store分割成不同的模块