(function () {
	function Index(option){
		this.menuList = option.menuList || [];
		this.dir = option.dirction || 'x';
		this.colNum = option.colNum || 2;
		this.parent = option.parent;
		this.fontColor = this.parent.find('a').css('color');
		this.len = this.menuList.length || 0;
		this.createDom();
		this.bindEvent();
	}
	Index.prototype.createDom = function () {
		var self = this;
		var content = $('<div class="dropCont" style="display: none;"></div>')
		var dropDownCon = $('<div class="dropDownCon"></div>')
		// 生成结构
		this.menuList.forEach(function (ele) {
			// console.log(ele.items)
			var menu = $('<div class="nav-menu"></div>');
			if (ele.title) {
				var menuTitle = $('<div class="item menu-title"></div>').html(ele.title);
				menu.append(menuTitle).css('text-align','left');
			}
			// itemList 数据的展示列表
			var itemList = $('<div class="itemList"></div>');

			ele.items.forEach(function (ele2) {
				var str = $('<a href="' + ele2.href + '">' + ele2.href +'</a>');
				var item = $('<div class="nav-menu" style="width: 100px; display: inline-block;"></div>');
				item.html(str).append(itemList);
			});
			menu.append(itemList).appendTo(dropDownCon);
		});
		content.append(dropDownCon).appendTo(self.parent);
		this.addCss();
		// menu 组排列
		if(this.dir == 'x'){
			$('nav-menu',this.parent).css({
				'display': 'inline-block',
				'border-right': '1px solid #ddd'
			})
			$('.dropCont', this.parent).css({
				'width': ($('nav-menu',this.parent).innerWidth() + 2) * self.len + 'px',
				'right': 0
			})
		}else{
			$('nav-menu',this.parent).css({
				'display': 'block',
				'border-bottom': '1px solid #ddd',
				'right': 0
			})
			$('.dropCont', this.parent).css({
				// 'width': ($('nav-menu',this.parent).innerWidth() + 2) * 2 + 'px',
				'left': 0
			})			
		}
	};
	Index.prototype.addCss = function () {
		this.parent.css({
			'position': 'relative'
		});
		$('.dropCont', this.parent).css({
			'position': 'absolute',
			'z-index': 999
		});	
		$('nav-menu',this.parent).css({
			'padding': '10px',
			'width': $('nav-item', this.parent).width() * self.colNum + 'px',
			'backgroundcolor': '#fff',
			'border-bottom': '1px solid #ddd'
		});
		$('nav-menu',this.parent).css({
			'vertical-align': 'top',
		});		
	};
	Index.prototype.bindEvent = function () {
		var self = this;
		this.parent.hover(function() {
			$(this).css({
				'background-color': '#fff',
				'padding': '0 5px'
			}).find('a').css('color',self.fontColor);
			$('.dropCont', self.parent).show();		
		},function () {
			$('.dropCont', self.parent).hide();
			var color = self.parent.parents().css({'background-color': '#fff'});
			self.parent.css('background-color','#fff');
		});
		$('.nav-item', this.parent).hover(function () {
			$(this).find('a').css('color', '#f10214');
		}, function () {
			$(this).find('a').css('color', self.fontColor);
		})
	};
	$.fn.extend({
		dropList:function (option) {
			option.parent = this;
			new Index(option);
			return this;
		}
	})
})();