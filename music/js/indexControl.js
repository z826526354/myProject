(function ($, root) {
	function Control(len) {
		// this ——> Control
		this.index = 0;

		this.len = len;
	}
	Control.prototype = {
		prev: function () {
			// if (this.index == 0) {
			// 	this.index = len -1;
			// }else{
			// 	this.index --;
			// }
			return this.getIndex(-1);
		},
		next: function () {
			// if (this.index == len -1) {
			// 	this.index = 0;
			// }else{
			// 	this.index ++;
			// }
			return this.getIndex(1);
		},
		getIndex: function (val) {
			// 计算改变后的索引

			// 当前对应索引
			var index = this.index;

			// 数据总长度
			var len = this.len;
			var curIndex = (index + val + len) % len;
			this.index = curIndex;
			// 改变后的索引
			return curIndex;
		}

	}
	root.controlIndex = Control;
})(window.Zepto, window.player || (window.player = {}));