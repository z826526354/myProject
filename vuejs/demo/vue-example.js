// var list = [{
// 	title: "吃饭",
// 	checked: true
// }, {
// 	title: "睡觉",
// 	checked: false
// }];
// 处理 localStorage

var setLocal = {
	save(key, value) {
		localStorage.setItem(key, JSON.stringify(value))
	},
	get(key) {
		return JSON.parse(localStorage.getItem(key))
	}
};
var filterChecked = {
	all(list){
		return list
	},
	finish(list) {
		return list.filter(function (item) {
			return item.checked
		})
	},
	unfinish(list) {
		return list.filter(function (item) {
			return !item.checked
		})
	}
};
var list = setLocal.get("todo") || [];
var vm = new Vue({
	el: ".main",
	watch: {
		list: {
			deep: true,
			handler: () => {
				setLocal.save("todo", this.list);
			}
		}
	},
	data: {
		list: list,
		inputValue: "",
		editingToDo: "",
		beforeEditing : "",
		visibility: "all"
	},
	computed: {
		filterList () {
			return this.list.filter(function (item) {
				return !item.checked
			}).length;
		},
		filterCheck() {
			return filterChecked[this.visibility] ? filterChecked[this.visibility](this.list) : this.list
		}
	},
	methods: {
		filter(){
			return this.list.filter(function (item) {
				return !item.checked
			}).length
		},

		addToDo: (event) => {
			this.list.push({
				// 这个push是vue重写的
				title: vm.inputValue,
				checked: false
			})
			vm.inputValue = ""
		},
		deleteToDo(todo) {
			var index = this.list.indexOf(todo);
			this.list.splice(index, 1)
			// 这个splice不是重写的
		},
		editToDo(todo) {
			this.editingToDo = todo;
			this.beforeEditing = todo.title;
		},
		editedToDo() {
			this.editingToDo = ""
		},
		cancelEdit(todo){
			todo.title = this.beforeEditing;
			this.beforeEditing = "";
			this.editingToDo = ""
		}
	},
	// 自定义组件
	directives: {
		focus: {
			update (el, binding) {

				if (binding.value) {
					console.log(el)
					el.focus()
				}
			}
		}
	}
})

function hashchange() {
	var hash = window.location.hash.slice(1);
	vm.visibility = hash
}
hashchange();
window.addEventListener("hashchange", hashchange)