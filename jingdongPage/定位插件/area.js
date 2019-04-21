;(function () {
	var obj = {
		// 插件的功能
		init: function (option) {
			this.parent = option.parent;
			this.items = option.items;
			this.rowNum = option.rowNum || 5;
			this.nowItem = option.nowItem || this.items[0].name || '';
			this.nowItemImg = option.nowItemImg || '';
			this.createDom();
			this.bindEvent();
		},
		// 防止参数一层层往下传，把function挂载到对象上，把参数变成对象上的属性
		createDom: function () {
			var wrap = $('<div class="areaContent"></div>');
			var nowArea = $('<div class="nowArea"></div>');
			var itemList = $('<div class="itemList"></div>');
			if (this.nowItemImg) {
				var img = new Image();
				img.src = this.nowItemImg;
				img.onload = function () {
					$(img).prependTo(nowArea);
				}
			}
			$('<span class="item-name"></span>').html(this.nowItem).appendTo(nowArea);
			this.items.forEach(function (ele,index) {
				// console.log(ele,index);
				var str = '<a href="' + ele.href + '">' + ele.name + '</a>';
				$('<div class="item"></div>').append(str).appendTo(itemList);
			})
			wrap.append(nowArea).append(itemList);
			this.parent.append(wrap);
			$('#location .itemList').css({
				'width': $('.item').innerWidth() * this.rowNum + 'px',
				'top': $(this.parent).height() - 2 +'px'
			})			
		},
		bindEvent: function () {
			$('.itemList').on('click', '.item', function () {
				$('.nowActive').removeClass('nowActive');
				$(this).addClass('nowActive');
				$('span.item-name').text($(this).text());
			})
		}
	}
	
	// 扩展插件
	$.fn.extend({
		areaList: function (option) {
			option.parent = this;
			obj.init(option);
		}
	})
})();