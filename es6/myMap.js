function myMap() {
	this.bucketLength = 8;
	this.init();
}
myMap.prototype.init = function () {
	// 初始化
	this.bucket = new Array(this.bucketLength);
	for(var i = 0; i < this.bucket.length; i++){
		this.bucket[i] = {
			type: 'bucket_' + i,
			next: null
		}
	}
}

// 去重
myMap.prototype.makeHash = function (key) {
	let hash = 0;
	// hash 控制在 0~3
	if (typeof key != 'string') { // string  
		if (typeof key == 'number') {//number NaN
			hash = Object.is(key, NaN) ? 0 : key;
			// Object.is(a, b) ==> es6新增方法：判断是否a严格相等于b
		}else if (typeof key == 'object') {// null  {} []
			hash = 1;
		}else if (typeof key == 'boolean') {// boolean 
			hash = Number(key);
		}else {//  undefined 
			hash = 2;
		}
	}else {
		// string
		// 'a' 'b' 'asdasdasdasda'
		// 长度>=3 取前三字符ascii 累加（自己定的规则）
		for (var i = 0; i < 3; i++) {
			hash += key[i] ? key[i].charCodeAt(0) : 0;
		}
	}
	return hash % 8;
}

myMap.prototype.set = function (key, value) {
	let hash = this.makeHash(key);
	let oTempBucket = this.bucket[hash];
	while (oTempBucket.next) {
		if (oTempBucket.next.key == key) {
			oTempBucket.next.value = value;
			return;
		}else {
			oTempBucket = oTempBucket.next;
		}
	};
	oTempBucket.next = {
		key: key,
		value: value,
		next: null
	};
}

myMap.prototype.get = function (key) {
	let hash = this.makeHash(key);
	let oTempBucket = this.bucket[hash];
	while (oTempBucket) {
		if (oTempBucket.key == key) {
			return oTempBucket.value
		}else {
			oTempBucket = oTempBucket.next;
		}
	}
	return 'undefined'
}

myMap.prototype.delete = function (key) {
	let hash = this.makeHash(key);
	let oTempBucket = this.bucket[hash];
	while (oTempBucket.next) {
		if (oTempBucket.next.key == key) {
			oTempBucket.next = oTempBucket.next.next;
		}
	}
}

myMap.prototype.has = function (key) {
	let hash = this.makeHash(key);
	let oTempBucket = this.bucket[hash];
	while (oTempBucket) {
		if (oTempBucket.next && oTempBucket.next.key == key) {
			return true;
		}else {
			oTempBucket = oTempBucket.next;
		}
	}
	return false;
}

myMap.prototype.clear = function () {
	this.init();
}

let oMap = new myMap();
oMap.set('name', 'hsz');
oMap.set('name1', 'hsz1');
oMap.set({}, '---');
oMap.set('name2', '---');
