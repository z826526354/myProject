(function ($, root) {
	// play  pause  getAudio
	function AudioManager() {
		// 创建一个audio对象
		this.audio = new Audio();
		// audio默认状态
		this.status = 'pause';
	};
	
	AudioManager.prototype = {
		play: function () {
			this.audio.play();
			this.status = 'play';
		},
		pause: function () {
			this.audio.pause();
			this.status = 'pause';
		},
		getAudio: function (src) {
			this.audio.src = src;
			this.audio.load();
		},
		playTo: function (t) {
			this.audio.currentTime = t;
		}
	};
	root.audioManager = new AudioManager(); // 暴露构造函数但不执行

})(window.Zepto, window.player || (window.player = {}));