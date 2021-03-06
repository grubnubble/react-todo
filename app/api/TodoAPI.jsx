var $ = require('jquery');

module.exports = {
	setTodos: function (todos) {
		if ($.isArray(todos)) {
			localStorage.setItem('todos', JSON.stringify(todos));
			return todos;
		}
	},
	getTodos: function () {
		var stringTodos = localStorage.getItem('todos');
		var todos = [];

		try {
			todos = JSON.parse(stringTodos);
		} catch (e) {

		}

		//ternary operator ways to do the return statement:
		// return $.isArray(todos) ? todos : [];

		if ($.isArray(todos)) {
			return todos;
		}  else {
			return [];
		}
	},
	removeTodo: function (todo) {
		//how to remove just one item from the todos array?
	},
	filterTodos: function (todos, showCompleted, searchText) {
		var filteredTodos = todos;

		//filter by showCompleted
		filteredTodos = filteredTodos.filter((todo) => {
			return !todo.completed || showCompleted;
		});

		//filter by searchText
		filteredTodos = filteredTodos.filter((todo) => {
			var text = todo.text.toLowerCase();
			return searchText.length === 0 || text.indexOf(searchText) > -1;
		});


		//sort todos with non-completed first
		filteredTodos.sort((a,b) => {
			if (a.completed === false && b.completed === true) {
				return -1;
			} else if (a.completed && !b.completed) {
				return 1;
			} else {
				return 0;
			}
		})

		return filteredTodos;
	}
};