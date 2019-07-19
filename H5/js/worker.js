importScripts('./add.js');


this.onmessage = function (e) {
	console.log(e.data)
	var num = 0;
	for (var i = 0; i < 1000; i++) {
		num ++;
	}
	var sum = e.data + num;
	console.log(e.data + num)
	postMessage(sum);
	console.log(add(1, 3));

	this.close();
}