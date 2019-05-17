## js ——JavaScript：解释性语言

同时也叫  ECMAScript

- **编译**	C，C++等

  ​	优点：快

  ​	不足：移植性不好，(不跨平台)



- **解释**    javascrip， php等

​		优点：跨平台（不需要编译成文件）

​		不足：稍慢



- **混合型**    Java

​		.java -->javac --> 编译 --> .class ----> jvm ----> 解释执行（两个都不是）



生活中的异步就是js的同步

单线程，同一时间处理一件事

#### 那是怎么模拟成多线程呢？

处理事件足够快的情况下，就可以做到看起来同时在做同一时间在做多件事

专业术语： 轮转时间片（争抢时间）

1. **主流浏览器**：

   ​	IE —————— trident

   ​	Chrom ———— webkit / blink

   ​	Firefox ———— Gecko

   ​	Opera ————  presto

   ​	Safari ————   webkit

2. **引入js**

   ​	页面嵌入`<script type="text/javascript"></script>`

   ​	外部js文件`<script type="text/javascript" src="./***.js"></script>`

   ​	为符合W3C标准 结构(html)    行为(js)     样式(css)    相分离

   ​	编程语言特点： 有变量( variable )

   ​	html，css属于脚本语言，计算机语言( 依然不影响它们的强大 )

3. **变量声明**

   ​	`var a; `—— 向window申请一个地方叫a

   ​	多个变量时尽量单一 var

   ```js
   		var a,
   			b,
   			c;
   ```

4. **变量赋值**

   ​	`a = 100;`—— 把100给a

   ​	再次赋值111给 a ，则原来100会被替换

5. **变量命名规则**

   - 变量名必须以包括 英文字母，_  ,  $ 开头 
   - 变量名可以包括     英文字母， _  , $ 数字 
   - 不可以用系统关键字(var new break else等)， 保留字作为变量名  (float int long class等)

6. **运算优先级 > 赋值**

7. **值的类型**

   原始值 （stack）栈内存 first in, last out （不可改变性）

   ​	Number ———— 数字（1, 2, 3, 4）

   ​	Boolean ———— 布尔（true / false）

   ​	String ————— 字符串（' 123 '， " 123 "）

   ​	undefined ——— 没有定义的（undefined）

   ​	null —————— 空-----占位（null）

   引用值（heap）堆内存

   ​	Array ————— 数组（[1, 2, 3, 4]）

   ​	Object ————  对象（{a: 1, b: 2}）

   ​	function ———   函数（function () {}）

   ​	Data ————— Data（）

   ​	RegExp ———— 正则（/\/）

   

   - Number、Stirng、Boolean、Null、Underfined这些基本数据类型，他们的值直接保存在栈中;

   `栈内存与栈内存之间是复制的关系var b = a;`

   ![](./zhan2.PNG)

   ```js
   var num = 100;
   var num1 = num;
   num = 200；
   
   事实上 —— 100 依然存在，只是剪断了 num 与 100 的关系
   然后重新在 window 弄了个 num1 
   再然后将原来的 num值（100）赋给 num1，
   最后又重新找window要了个地方叫num，将原来的num地方抹去变量名，再把200赋值给num
   
   ```

   

   - Object、Function、Array、Date、RegExp这些引用类型，他们的引用变量（地址）储存在栈中，通过指针（这个地址）指向储存在堆中的实际对象

   ```js
var arr = [1, 2];
   var arr1 = arr;
   arr.push(3);
   ```
   
   ![](./zhan.PNG)

   ```js
var arr = [1, 2];
   var arr1 = arr;
   arr = [1, 3];
   ```
   
   ![](./zhan3.PNG)

8.  **js语句基本规则**

   - 语句后面加分号结束 " ; "

   - js语法错误会引发后续代码终止，但不会影响其他**js代码块**

     低级错误：（语法解析错误）出现中文符号等

     逻辑错误：（标准错误， 情有可原）没有定义变量等

     一个`<script type="text/javascript"><script/>`就是一个js代码块

   - 书写格式要规范， " = + / - " 两遍呢都应该有空格

9. **运算操作符**

   - 数学运算，字符串连接

   - 任何数据类型加字符串都等于字符串

   - " + " , " - " , " * ", " / " , " % " , " () "

   - 优先级 " = " 最弱， " () " 最强

   - " ++ " , " -- " , " += " , "-=" , " /=" , " *= ", " %= "

     ```js
     // a++  ——> a = a + 1
     var a = 10;
     console.log( a++ ); // 先打印a，再 ++   10
     
     var b = 20;
     console.log( ++b ); // 先 ++ ，再打印a  21
     
     var num1 = 10;
     var num2 = ++num1 - 1 + num1++; // 但是工作这样写是不行的，要新人都可以看懂才好
     console.log(num2 + ' ' + num1); // 21 12 
     
     // num += 10;  ——> num = num + 10
     
     // 交换 n 和 m 的值
     var n = 123;
     var m = 234;
     1. 	
     	var c = n;
     	n = m;
     	m = c;
     2. 
     	a = a + b;
     	b = a - b;
     	a = a - b;
     3. 
     	var a = 1 + 'a'; // 1a
     	var b = 0 / 0;   // NaN
     	var c = 1 / 0;   // infinity
     4. 
     	var a = 1;
     	var b = ++a + 1; // 3 '++'第一运算
     	var c = a++ + 1; // 2 '++'最后才运算
     ```

     

10. **比较运算符**

     - " < " , " > " , " = " , " >= " , " <= " , "==" , " != " , " === " 

     - 字符串比较的是 ASCLL 码

       ```js
       var a = '10' > '8'; // false
       ```

11. **逻辑运算符**

    - " && " , " || " , " ! " —— 运算的结果为真实值

    - " && " —— 表达式转换成布尔值的结果，如果结果为真，那么它会看第二个表达式转换为布尔值的结果，然后如果只有两个表达式的话，只要看到第二个表达式，就返回表达式的值了，简单来说：**遇到为`false`的值返回 这个值，遇到全为`true`的值就返回 最后一个值, 有中断的作用，所以可以作为"如果，那么":**

      ```js
      2 > 1 && document.write('aaa')
      ```

    - " || " —— 遇到为`true`的值返回 这个值，遇到全为`false`的值就返回 最后一个值

    - " ! " —— 转换为布尔值再取反，   `!!NaN`转换为布尔值

    - undefined, null, NaN, "", 0 —— 这五个值返回的布尔值都是FALSE

### 条件语句循环语句

12. **if语句** —— 括号里的条件为true就运行 "{}" 里面的

    ```js
    if (1 > 0 && 2 > 0) {
    	console.log('a');
    }
    
    if () {
        
        }else if () {
         // 类似排除法
        }else {
        
    }
    ```

    

13. **for循环**

    ```js
    for ( var i = 0; i < 10; i++ ) {
        // (1) —————（2）—————（3）
    	// 减少我们的重复
        console.log('a') // 打印10个a
    }
    /* 
    for 循环执行顺序：
    	先执行一遍（1）
    	判断（2）执行语句
    	执行（3）
    	判断（2）执行语句
    	执行（3）
    	判断（2）执行语句
    	执行（3）
    	判断（2）执行语句
    	执行（3）
    	直到（2）有一次条件不成立，立马停止
    
    1. var i = 0;
    2. if (i < 10) {
    	console.log('a')
    }
    3. i++; ---> i = 1;
    4. if (i < 10) {
    	console.log('a')
    }
    5. …………
    */
    ```

    

14.  **while循环（简化版的for循环）**

    ```js
    var i = 0;
    /*
    for (;i < 10;) {
    	console.log(i);
    	i++;
    }
    */
    while (i < 10) {
        console.log(i);
    	i++;
    }
    // 两个一样的效果
    ```

##### 练习：

 1. 计算2的n次幂，n可输入，n为自然数

    ```js
    var n = parseInt(window.prompt('input'));
    var mul = 1;
    for (var i = 0; i < n; i ++) {
        mul *= 2;
    }
    console.log(mul)
    // 先找规律，在写
    ```

 2. 计算n的阶乘，n可输入

    ```js
    var n = parseInt(window.prompt('input'));
    var mul = 1;
    for (var i = 1; i <= n; i ++) {
    	mul *= i;
    }
    console.log(mul);
    ```

 3. 著名的斐波那契数列， 输出第n项

    ```js
    var n = parseInt(window.prompt('input'));
    var first = 1,
        secend = 2,
        third;
    if (n > 2) {
        for (var i = 0; i < n-2; i ++) {
            third = first + secend;
            first = secend;
            secend = third;
        }
        console.log(third);
    }else {
        console.log(1);
    }
    ```

    

 4. 编写程序， 输入一个三位数的正整数， 输出时反向输出。如：456 ---> 654

    ```
    
    ```

    

 5. 输入a, b, c三个数字，打印出最大的

    ```js
    var n = parseInt(window.prompt('input'));
    if (a > b) {
        if (a > c) {
            console.log(a)
        }else {
            console.log(c)
        }
    }else {
        if (b > c) {
            console.log(b)
        }else {
            console.log(c)
        }
    }
    ```

 6. 打印出100以内的质数

    ```js
    var count = 0;
    for (var i = 2; i < 100; i++) {
    	for (var j = 1; j <= Math.sqrt(i); j++) {
            if (i % j == 0) {
                count ++;
            }
        }
        if (count == 1) {
                console.log(i + "  ")
            }
        count = 0;
    }
    ```

    