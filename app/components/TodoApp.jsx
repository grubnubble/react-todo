var React = require('react');
var uuid = require('node-uuid');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var Search = require('Search');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
			showCompleted: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog',
					completed: false
				}, {
					id: uuid(),
					text: 'Clean the kitchen',
					completed: false
				}, {
					id: uuid(),
					text: 'Craft night with friends',
					completed:  true
				}, {
					id: uuid(),
					text: 'Appropriate the means of production',
					completed:  true
				}
			]
		};
	},
	handleToggle: function (id) {
		var updatedTodos = this.state.todos.map(function (task) {
			if (task.id === id) {
				task.completed = !task.completed;
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
					completed:  false
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
		var {todos} = this.state;

		return (
		        <div>
		        	<Search onSearch={this.handleSearch}/>
		        	<TodoList todos={todos} onToggle={this.handleToggle}/>
		        	<AddTodo onAddTodo={this.handleAddTodo}/>
		        </div>
		)
	}
});

module.exports = TodoApp;