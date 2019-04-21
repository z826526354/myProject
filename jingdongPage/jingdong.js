$('#swiper').sliderImg({
	image:['image/pic1.jpg','image/pic2.jpg','image/pic3.jpg'],
	interVal:2000
});
$('#location').areaList({
	items: [{
		name: '北京',
		href: '#',
	},{
		name: '上海',
		href: '#',
	},{
		name: '黑龙江',
		href: '#',
	},{
		name: '北京',
		href: '#',
	},{
		name: '天津',
		href: '#',
	},{
		name: '武汉',
		href: '#',
	},{
		name: '广州',
		href: '#',
	},{
		name: '北京',
		href: '#',
	},{
		name: '上海',
		href: '#',
	},{
		name: '黑龙江',
		href: '#',
	},{
		name: '中山',
		href: '#',
	},{
		name: '天津',
		href: '#',
	},{
		name: '武汉',
		href: '#',
	},{
		name: '广州',
		href: '#',
	},{
		name: '黑龙江',
		href: '#',
	},{
		name: '中山',
		href: '#',
	},{
		name: '天津',
		href: '#',
	},{
		name: '武汉',
		href: '#',
	},{
		name: '广州',
		href: '#',	
	},{
		name: '广州',
		href: '#',				
	}],
	rowNum: 5,							// 每行显示数量
	nowItem: '北京',						// 默认地址
	color: '#999', 						// 默认颜色
	nowItemImg: '定位插件/img/local.jpg'	//默认图片
});
// 导航条下拉列表菜单
// y  纵向
$('#my_jd').dropList({
	dirction: 'y',
	colNum: 2,
	menuList: [{
		title: '',
		items: [{
			href: '#',
			name: "待处理订单",
		}, {
			href: '#',
			name: "返修退换货"
		}, {
			href: '#',
			name: "降价商品"
		}, {
			href: '#',
			name: "消息"
		}, {
			href: '#',
			name: "我的问答"
		}, {
			href: '#',
			name: "我的关注"
		}],
	}, {
		title: '',
		items: [{
			href: '#',
			name: "待处理订单",
		}, {
			href: '#',
			name: "返修退换货"
		}, {
			href: '#',
			name: "降价商品"
		}, {
			href: '#',
			name: "消息"
		}]
	}]
})
 
 
// x 横向 
$('#nav').dropList({
	dirction: 'x',
	colNum: 4,
	menuList: [{
		title: '',
		items: [{
			href: '#',
			name: "待处理订单",
		}, {
			href: '#',
			name: "返修退换货"
		}, {
			href: '#',
			name: "降价商品"
		}, {
			href: '#',
			name: "消息"
		}, {
			href: '#',
			name: "我的问答"
		}, {
			href: '#',
			name: "我的关注"
		}],
	}, {
		title: '',
		items: [{
			href: '#',
			name: "待处理订单",
		}, {
			href: '#',
			name: "返修退换货"
		}, {
			href: '#',
			name: "降价商品"
		}, {
			href: '#',
			name: "消息"
		}]
	}]	
})

function init(){
	top_change();// 开头菜单
	left_slider(); // 左边菜单
	right_slider(); // 右边菜单
}
init();
function top_change(){
	$('.my_jd').on('mouseover',function () {
		$('.jd_hide').css({'display': 'block'})
	}).on('mouseout',function () {
		$('.jd_hide').css({'display': 'none'})
	})
	$('.my_co').on('mouseover',function () {
		$('.company_hide').css({'display': 'block'})
	}).on('mouseout',function () {
		$('.company_hide').css({'display': 'none'})
	})
	$('.my_sev').on('mouseover',function () {
		$('.service_hide').css({'display': 'block'})
	}).on('mouseout',function () {
		$('.service_hide').css({'display': 'none'})
	})
	$('.my_de').on('mouseover',function () {
		$('.w-derection').css({'display': 'block'})
	}).on('mouseout',function () {
		$('.w-derection').css({'display': 'none'})
	})
	$('.phonejd').on('mouseover',function () {
		$('.codes').css({'display': 'block'})
	}).on('mouseout',function () {
		$('.codes').css({'display': 'none'})
	})
}

var index;
function left_slider(){
	$('.cate_menu_item').hover(function () {
		$('.cate_hide').css({'display': 'block'})
		index = $(this).attr('date-index');
		$('#ca-hi' + index).css('display','block');
	},function () {
		$('.cate_hide').css({'display': 'none'})
		$('#ca-hi' + index).css('display','none');
	});
	$('.cate_hide').on('mouseover',function () {
		$(this).css({'display': 'block'})
		$('#ca-hi' + index).css('display','block');
	}).on('mouseout',function () {
		$(this).css({'display': 'none'})
		$('#ca-hi' + index).css('display','none');
	})	
}

function right_slider() {
	$('.serv_entry .row1').hover(function () {
		$('.serv_entry').slideUp();
		$('.serv_content').slideDown();
		$('.serv_content .content').css('display','none');
		// console.log($(this).attr('id'));
		var id = $(this).attr('id');
		$('.nowActive').removeClass('nowActive');
		$('.' + id + '_tab').addClass('nowActive');
		$('.' + id + '_content').show();
		$('.close').show();
	})
	$('.serv_content_item span').hover(function () {
		$('.nowActive').removeClass('nowActive');
		$(this).addClass('nowActive');
		console.log(this);
		$('.' + $(this).attr('data') + '_content').show();
		$('.' + $(this).attr('data') + '_content').siblings('.content').hide();	
	})
	$('.serv_content .close').on('click', function () {
		$(this).hide();
		$('.serv_entry').slideDown();
		$('.serv_content').slideUp();
		$('.serv_content .content').hide();		
	})

	$('.notice').hover(function () {
		$('.con_notice').show();
		$('.con_sale').hide();
		$('.n_active').css('left','72px')
	})
	$('.sale').hover(function () {
		$('.con_sale').show();
		$('.con_notice').hide();
		$('.n_active').css('left','15px')
	})	
} 