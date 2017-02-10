var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');
var TodoAPI = require('TodoAPI');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: TodoAPI.getTodos()
		};
	},
	componentDidUpdate: function () {
		TodoAPI.setTodos(this.state.todos);
	},
	handleToggle: function (id) {
		var updatedTodos = this.state.todos.map(function (task) {
			if (task.id === id) {
				task.completed = !task.completed;
				task.completedAt = task.completed ? moment().unix() : undefined;
			}

			return task;
		});

		this.setState({todos: updatedTodos});
	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text,
					completed:  false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	},
	handleSearch: function (showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	render: function () {
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

		return (
		        <div>
		        	<Search onSearch={this.handleSearch}/>
		        	<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
		        	<AddTodo onAddTodo={this.handleAddTodo}/>
		        </div>
		)
	}
});

module.exports = TodoApp;