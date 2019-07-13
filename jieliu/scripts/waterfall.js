/**
 * 创建一个瀑布流
 * @param {*} areaDom 容器
 * @param {*} urls 图片的url地址数组
 * @param {*} everyWidth 每张图片的宽度
 */
 function createWaterFall(areaDom, urls, everyWidth) {
    var colNumber; //有多少列
    var gap; //每一列之间的间隙
    //1. 创建图片
    createImgDoms();

    //2. 设置图片的坐标
    setImgPosition();

    //窗口改变事件
    var timer = null;
    window.onresize = function () {
    	if (timer) {
    		clearTimeout(timer);
    	}
    	timer = setTimeout(function () {
    		setImgPosition();
    		// 防抖
    	}, 500);
    }

    //函数区

    /**
     * 计算一些小学数学问题
     */
     function cal() {
     	var containerWidth = parseInt(areaDom.clientWidth);
     	colNumber = Math.floor(containerWidth / everyWidth);
        //剩余空间
        var space = containerWidth - colNumber * everyWidth;
        gap = space / (colNumber + 1);
    }

    /**
     * 创建图片的dom对象
     */
     function createImgDoms() {
     	for (var i = 0; i < urls.length; i++) {
     		var url = urls[i];
     		var img = document.createElement("img");
     		img.src = url;
     		img.style.width = everyWidth + "px";
     		img.style.position = "absolute";
     		img.onload = function () {
     			setImgPosition();
     		}
     		areaDom.appendChild(img);
     	}
     }

    /**
     * 设置每张图片的坐标
     */
     function setImgPosition() {
     	cal();
        var colY = new Array(colNumber); //存放的是每一列的下一个图片的Y坐标
        colY.fill(0); //将数组的每一项填充为0

        for (var i = 0; i < areaDom.children.length; i++) {
        	var img = areaDom.children[i];
            //找到colY中的最小值
            var y = Math.min(...colY);//y坐标
            //x坐标
            var index = colY.indexOf(y) //第几列
            var x = (index + 1) * gap + index * everyWidth;
            img.style.left = x + "px";
            img.style.top = y + "px";

            //更新数组
            colY[index] += parseInt(img.height) + gap;
        }

        //找到数组中最大的数字
        var height = Math.max(...colY);
        areaDom.style.height = height + "px";
    }
}