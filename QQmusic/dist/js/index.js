var root = window.player;
var dataList;
var len;
var audio = root.audioManager;
var control;
var timer;
function getData(url) {
	$.ajax({
		type: 'GET',
		url: url,
		// dataType: '',
		success: function (data) {
			console.log(data);
			len = data.length;
			control = new root.controlIndex(len);
			dataList = data;
			root.lister(dataList);
			// audio.getAudio(data[0].audio);
			// root.pro.renderAllTime(dataList[0].duration);
			bindEvent(dataList);
			bindTouch();
			$('body').trigger('playChange',0);
		},
		error: function () {
			console.log('error')
		}
	})
}

function bindEvent(dataList) {
	$('body').on('playChange', function (e, index) {
		audio.getAudio(dataList[index].audio);
		root.render(dataList[index]);
		root.pro.renderAllTime(dataList[index].duration);
		if (audio.status == 'play') {
			rotated(0);
			audio.play();
		}
		$('.img-box').attr('data-deg', 0);
		$('.img-box').css({
			transform: 'rotateZ('+ 0 +'deg)',
			transition: 'none'
		})
	})
	$('.prev').on('click', function () {
		var i = control.prev();
		$('body').trigger('playChange',i);
		root.pro.start(0);
	});
	$('.next').on('click', function () {
		var i = control.next();
		$('body').trigger('playChange',i);
		root.pro.start(0);
		if (audio.status == 'pause') {
			root.pro.stop();
		}
	});
	$('.play').on('click', function () {
		if (audio.status == 'pause') {
			audio.play();
			root.pro.start();
			var deg = $('.img-box').attr('data-deg') || 0;
			rotated(deg);
		}else{
			audio.pause();
			root.pro.stop();
			clearInterval(timer);
		}
		$('.play').toggleClass('playing');

	});
	$('.like').on('click', function () {
		if ($('.btn').attr('class') == 'liking') {
			$(this).removeClass('liking');
		}else {
			$('.like').toggleClass('liking');
		}
	})
	$('.list').on('touchend', function () {
		$('.listWrap').css({
			top: '-85px'
		})
	})
	$('.listWrap').on('click', 'li', function () {
		$('.listWrap').css({
			top: '65px'
		});
		
		$('.active').removeClass('active');
		$(this).addClass('active');
	})
	$('.song-info').on('click', function () {
		$('.listWrap').css({
			top: '65px'
		});
	})
}

function bindTouch() {
	var $spot = $('.spot');
	var bottom = $('.pro-bottom').offset();
	var left = bottom.left;
	var width = bottom.width;
	$spot.on('touchstart', function () {
		root.pro.stop();
	}).on('touchmove', function (e) {
		var x = e.changedTouches[0].clientX - left;
		var per = (x - 1) / width;
		if (per >= 0 && per <=1) {
			root.pro.updata(per);
		}
		// console.log(e);
	}).on('touchend', function (e) {
		var x = e.changedTouches[0].clientX - left;
		var per = (x - 1) / width;
		if (per >= 0 && per <=1) {
			var time = per * dataList[control.index].duration;
			root.pro.start(per);
			audio.playTo(time);
			audio.play();
			audio.status = 'play';
			$('.play').addClass('playing');
		}
	})
}

function rotated(deg){
	clearInterval(timer);
	deg = parseInt(deg);
	timer = setInterval(function () {
		deg += 4;
		$('.img-box').attr('data-deg', deg);
		$('.img-box').css({
			transform: 'rotateZ(' + deg + 'deg)',
			transition: 'transform 0.2s linear'
		})
	}, 200);
}

getData('../mock/data.json');


// 模块化 js
// 信息加图片渲染到页面	render
// 点击按钮
// 点击播放与暂停 切歌
// 图片旋转


// 列表切歌
// 进度条进度与拖拽

