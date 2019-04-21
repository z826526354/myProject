(function(){
	function Swiper(opt){
		// 合并参数
		var opts = $.extend({'image':[], 'interVal':2000},opt);
		this.img = opts.image;
		this.wrap = opts.father;
		this.interVal = opts.interVal;
		this.init();
		// 一些全局对象放在swiper里面
	}
	Swiper.prototype.init = function(){
		this.nowIndex = 0;
		this.len = this.img.length;
		this.itemWidth = this.wrap.width();
		this.timer = undefined;
		this.flag = true;
		this.createDom();	// 创建并插入Dom元素
		this.bindEvent();	// 点击事件
		this.slide_auto();	// 自动轮播
	}
	Swiper.prototype.createDom = function () {
		var len = this.len;
		var str = '';
		var listStr = '';
		var w = this.wrap.width();
		var h = this.wrap.height();
		var ulW = w*(len + 1);
		var imgBox = $('<ul class="img-box"></ul>');
		var order = $('<div class="order"></div>');
		var list = $('<ul></ul>');
		var btn = '<div class="btn" style="">\
						<a class="prevBtn" href="javascript:;">\
							<span>&lt;</span>\
						</a>\
						<a class="nextBtn" href="javascript:;">\
							<span>&gt;</span>\
						</a>\
				   </div>';
		imgBox.css({
			'width': ulW + 'px',
			'height': h + 'px'
		})
		for (var i = 0; i < len; i++) {
			str += '<li><a href="javascript:;"><img src="'+ this.img[i] +'" alt=""></a></li>'
			listStr += '<li></li>'
		}
		str += '<li><a href="javascript:;"><img src="'+ this.img[0] +'" alt=""></a></li>'
		$(listStr).appendTo(list);
		this.wrap.append(imgBox.html(str))
				 .append(btn)
				 .append(order.append(list));
		imgBox.find('li').css({
			'width': w + 'px',
			'height': h + 'px'
		})
		$('.order li').eq(0).addClass('active');
	}
	Swiper.prototype.bindEvent = function () {
		var self = this;
		$('.order li').add('.prevBtn').add('.nextBtn').on('click', function () {
			if ($(this).attr('class') == 'prevBtn'){
				self.move('prev');
			}else if($(this).attr('class') == 'nextBtn'){
				self.move('next');
			}else{
				var index = $(this).index();
				self.move(index);
			}
			self.changeOrderStyle();
		});
		self.wrap.on('mouseenter', function () {
			$('.btn').show();
			clearTimeout(self.timer);
		}).on('mouseleave', function () {
			$('.btn').hide();
			self.slide_auto();
		})	
	}
	Swiper.prototype.move = function (direction) {
		var self = this;
		var len = self.len;
		if (self.flag){
			self.flag = false;
			if (direction == 'prev' || direction == 'next'){
				if (direction == 'prev'){
					if (self.nowIndex == 0) {// 如果当前是第一张图片，则先变化最后一张图，再动画向左移动一张
						$('imgBox').css({left: -(self.itemWidth * len)});
						self.nowIndex = len - 1;
					}else{
						self.nowIndex = self.nowIndex - 1;
					}
				}else{
					if (self.nowIndex == len - 1){// 如果当前是倒数第二张图片，则动画先向右移动一张，再变化到第一张图片
						$('imgBox').animate({left: -(self.itemWidth * len)}, function () {
							$(this).css({left: 0});
							// clearTimeout(self.timer);
							self.slide_auto();
							self.flag = true;
						})
						self.nowIndex = 0;
					}else{
						self.nowIndex = self.nowIndex + 1;
					}
				}
			}else{
				self.nowIndex = direction;	
			}
			self.slider();
		}
	}
	//每次变化，改变小圆点的样式
	Swiper.prototype.changeOrderStyle = function () {
		$('.active').removeClass('active');
		$('.order li').eq(this.nowIndex).addClass('active');
	}
	Swiper.prototype.slide_auto = function () {
		var self = this;
		clearTimeout(self.timer);
		self.timer = setTimeout(function () {
			self.move('next');
			self.changeOrderStyle();
		}, self.interVal)		
	}
	Swiper.prototype.slider = function () {
		var self = this;
			$('.img-box').animate({left: -(self.itemWidth * self.nowIndex)}, function () {
			// clearTimeout(timer);
			self.slide_auto();
			self.flag = true;
		});
	}
	$.fn.extend({// 原型上的扩展的方法
		sliderImg: function (options) {
			options.father = this || $('body');
			new Swiper(options);
		}
	})
})();
