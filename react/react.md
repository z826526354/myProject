## React

##### 原理特点：

- （效率高）

传统web页面操作dom'一般是直接操作，但但是代价很大，涉及重绘重排非常耗性能，而react为了尽可能减少对dom的操作，提供了一种不同而又强大的方式来更新dom，代替直接操作dom。就是virtual  Dom， 一个轻量级虚拟的DOM，又由于DIFF算法，更新virtual Dom时不保证马上影响真实Dom，react会等时间循环结束，然后利用Diff算法，通过当前新的Domm标书与之前作比较，计算出最小的步骤更新真实的Dom。

- （天生组件化）

##### components组件

在dom树上的节点被称为元素，在这里不同，称为virtual Dom，整体称为component，众多的virtual dom的节点就是一个完整抽象的组件

- （清晰）

从父节点传递到子节点，因为组件是简单且易于把握的，他们只需要从父节点获取props渲染即可。

#### state 和 render：

state属性包含定义组件所需要的一些数据，当数据发生改变时，将会调用render重新渲染。

react把组件看做是一个状态机（state machines）。通过用户的交互，实现不同的状态，然后渲染ui，让用户界面和数据保持一致

#### 应用场景

1 复杂场景下的高性能 ( react + redux )

2 重用组件库，组件组合（ant.design - 支付宝组件库）

3 懒人必备

```
npm install babel-loader babel-core babel-preset-es2015 babel-preset-react react react-dom
```

```txt
// 安装依赖
npm install yarn create-react-app -g 
// yarn 能够让我们快速创建my-app项目（相比npx create-react-app my-app）

create-react-app my-app
// 创建my-app项目

yarn start
// 执行
// 这样我们就创建好了一个简易的react项目
```

正如官方所说：熟悉jsx语法会让我们在react开发中事半功倍

当然也有人不喜欢这种js里面明目张胆的放标签，标签里面再肆无忌惮的放js语法。

不过当我们习惯以后就会发现其实比vue好用。当然只是我的个人体验

更新中。。。。。。