(function ($, root) {
	function lister(song) {
		console.log(song);
		var str = '<li>'+ song[0].song +'</li>\
					<li>'+ song[1].song +'</li>\
					<li>'+ song[2].song +'</li>';
		$('.listWrap').html(str);
	}



	root.lister = function (data) {
		lister(data);
	}
})(window.Zepto, window.player || (window.player = {}));