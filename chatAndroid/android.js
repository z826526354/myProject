// 请求: GET;
// 地址: 'http://data.duyiedu.com/api/chat';
// 请求数据: text: '你好';
// 返回数据: text: '你好';
bindEvent();

function bindEvent() {
	$('.btn').on('click', function () {
		var val = $('.inp').val();
		if(val) {
			getData(val);
			addDom('me', val);
		}
	});
	$('.inp').on('keyup', function (e) {
		// console.log(e.keyCode);
		if(e.keyCode == 13 && this.value) {
			$('.btn').trigger('click');
		}
	})
}
function getData(val) {
	$.ajax({
		url: "http://temp.duyiedu.com/api/chat",
		type: "GET",
		data: {text: val},
		success:function(data) {
			// console.log(val);
			console.log(data);
			var list = typeof data == 'string' ? JSON.parse(data) : data;
			console.log(list);
			addDom('r', list.text);
		},
		error:function() {
			console.log("error");
		}
	})
}

function addDom(who, text) {
	if(who == 'me') {
		$('	<div class="talk me">\
				<div class="user"></div>\
				<div class="text">' + text + '</div>\
			</div>').appendTo($('.inner'));
		$('.inp').val('');
	}else {
		$('	<div class="talk rabit">\
				<div class="user"></div>\
				<div class="text">' + text + '</div>\
			</div>').appendTo($('.inner'));		
	}
	$('.chat-box').scrollTop($('.chat-box')[0].scrollHeight);
} 