## VUE-cli(构建工具——脚手架)

内部模板有已经给我们配置好了wepack的模板

- 命令

  ```
  npm install vue-cli -g
  下载到全局
  ```

  ```
  vue -V
  查看版本
  ```

  ```
  npm init <template> <project-name>
  <项目模板><项目名字>
  
  npm init webpack myVue
  ```

  通常我们用官方的webpack模板

  ```json
  "scripts": {
      "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
      "start": "npm run dev",
      "build": "node build/build.js"
    }
  /*
  这里我们配置的时候没有使用ESlint
  vue run dev == 执行dev脚本
  （开发环境下）
  
  vue run build(开发完的环境下)
  */ 
  ```

  ```json
  "dependencies": {
      "vue": "^2.5.2",
      "vue-router": "^3.0.1"
    }
  // 运行时所需要的包
  ```

  ```json
  "devDependencies": {
      "autoprefixer": "^7.1.2",
      "babel-core": "^6.22.1",
      "babel-helper-vue-jsx-merge-props": "^2.0.3",
      "babel-loader": "^7.1.1",
      "babel-plugin-syntax-jsx": "^6.18.0",
      "babel-plugin-transform-runtime": "^6.22.0",
      "babel-plugin-transform-vue-jsx": "^3.5.0",
      "babel-preset-env": "^1.3.2",
      "babel-preset-stage-2": "^6.22.0",
      "chalk": "^2.0.1",
      "copy-webpack-plugin": "^4.0.1",
      "css-loader": "^0.28.0",
      "extract-text-webpack-plugin": "^3.0.0",
      "file-loader": "^1.1.4",
      "friendly-errors-webpack-plugin": "^1.6.1",
      "html-webpack-plugin": "^2.30.1",
      "node-notifier": "^5.1.2",
      "optimize-css-assets-webpack-plugin": "^3.2.0",
      "ora": "^1.2.0",
      "portfinder": "^1.0.13",
      "postcss-import": "^11.0.0",
      "postcss-loader": "^2.0.8",
      "postcss-url": "^7.2.1",
      "rimraf": "^2.6.0",
      "semver": "^5.3.0",
      "shelljs": "^0.7.6",
      "uglifyjs-webpack-plugin": "^1.1.1",
      "url-loader": "^0.5.8",
      "vue-loader": "^13.3.0",
      "vue-style-loader": "^3.0.1",
      "vue-template-compiler": "^2.5.2",
      "webpack": "^3.6.0",
      "webpack-bundle-analyzer": "^2.9.0",
      "webpack-dev-server": "^2.9.1",
      "webpack-merge": "^4.1.0"
    }
  // 开发时所需要的包
  ```

  ```json
  "engines": {
      "node": ">= 6.0.0",
      "npm": ">= 3.0.0"
    }
  // 整个项目需要用到的引擎
  ```

  ```txt
  "browserslist": [
      "> 1%", // 市场份额 > 1%
      "last 2 versions", // 最近的两个版本好使
      "not ie <= 8" // ie不 <= 8
    ]
  // 浏览器的配置
  ```

  #### .babelrc文件(配置es6转es5的一些babel-loader)

  ```txt
  "presets": [ // 预设
      // env——支持es5-7
      ["env", {
        "modules": false, // 模块化
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        },
      "stage-2" // 可使用草案2阶段的语法
      }]
  ```

  #### .editorconfig(编辑器配置)

  ```
  root = true
  
  [*]
  charset = utf-8
  indent_style = space
  indent_size = 2
  end_of_line = lf
  insert_final_newline = true
  trim_trailing_whitespace = true
  ```

  #### .eslintignore

  ```txt
  // 如果我们配置了
  build/*.js
  config/*.js
  // ESlint忽略build和config下的js文件检测
  ```

  #### [.eslintrc.js(ESlint配置)](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint)

  

  #### .gitignore(上传git时要忽略的文件配置)

  ```
  .DS_Store
  node_modules/
  /dist/
  npm-debug.log*
  yarn-debug.log*
  yarn-error.log*
  
  # Editor directories and files
  .idea
  .vscode
  *.suo
  *.ntvs*
  *.njsproj
  *.sln
  ```

  #### src 下的 main.js

  ```js
  import Vue from 'vue' // 引入vue
  import App from './App' // 引入当前文件夹下的App.vue(自动识别.vue)
  // 这里将匿名导出(export default)的对象命名为App, 这样就引入了App组件
  // .vue文件会被vue-loader转换文.html文件, index.js已经帮我们配置好了路由
  
  import router from './router' 
  // 路由 —— 引入当前目录下的router下的index.js(自动识别index.js)
  // 将这个匿名导出的路由命名为router
  // 在build文件夹下的webpack.base.conf.js文件内部有详细说明
  
  Vue.config.productionTip = false
  
  /* eslint-disable no-new */
  new Vue({
    el : '#app',
    router : router, // 注册一个叫router的路由, 将上面的router注入
    components : { App }, // { App : App }
    // 注册了一个局部组件，注入到App里面, 然后放到template模板里面进行覆盖
    template: '<App/>'
  })
  ```

  ```vue
  <template>
    <div id="app">
      我是App组件{{msg}}
      <router-view/>
      <!-- 
  	这个<router-view/>就会被替换掉，如下面src/router/index.js中代码所述 
  	-->
    </div>
  </template>
  ```

  ```js
  export default new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
      }
    ]
  })
  ```

  ##### 在App.vue文件中就是我们熟悉的 vue语法了

  

  后续更新中>>>>>

  