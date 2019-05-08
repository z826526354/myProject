## node之event事件 原理探究

```js
function eventEmitter() {
	this.eventList = {};
}

eventEmitter.prototype.on = function (eventname, callback) {
	if (!this.eventList[eventname]) {
		this.eventList[eventname] = []
	}
	this.eventList[eventname].push(callback)
}

eventEmitter.prototype.emit = function (eventname) {
	var self = this;
	var arg = Array.prototype.slice.call(arguments, 1);
	console.log(arg)
	var arr = this.eventList[eventname];
	arr.forEach(function(item) {
		item.apply(self, arg)
	});
}

var event1 = new eventEmitter();

event1.on("call", function (name, age) {
	console.log("calling", name, age)
})
event1.emit("call", "hsz", "18");
```


