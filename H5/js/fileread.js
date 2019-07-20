// 分割文件读取
function partFileReader(files, type, event) {
	this.type = type;
	this.files = files;
	this.event = event;
	this.total = files.size;
	this.step = 1024 * 1024;
	this.loaded = 0;
	this.reader = new FileReader();
	this.abort = this.reader.abort;
	this.readPartFile(0);
	this.bindEvent();
}
partFileReader.prototype.readPartFile = function (start) {
	if (this.files.slice) {
		var file = this.files.slice(start, start + this.step);
		switch (this.type) {
			case 'readerAsBinaryString':
				this.reader.readerAsBinaryString(file);
				break;
			case 'readAsDataURL':
				this.reader.readAsDataURL(file);
				break;
			case 'readAsText':
				this.reader.readAsText(file);
				break;
			case 'readAsArrayBuffer':
				this.reader.readAsArrayBuffer(file);
				break;
			default:
				break;
		}
	}
}
partFileReader.prototype.bindEvent = function () {
	var self = this;
	this.reader.onloadstart = function (e) {
		self.event.loadStart && self.event.loadStart.call(this, e);
	}
	this.reader.onprogress = function (e) {
		// self.loaded += e.loaded;
		self.event.progress && self.event.progress.call(this, e, self.loaded, self.total);
	}
	this.reader.onload = function (e) {
		self.loaded += e.loaded;
		self.event.load && self.event.load.call(this, e);
		if (self.loaded < self.total) {
			self.readPartFile(self.loaded);
		}
	}
	this.reader.onloadend = function (e) {
		self.event.loadend && self.event.loadend.call(this, e);
	}
	this.reader.onabort = function (e) {
		self.event.abort && self.event.abort.call(this, e);
	}
}