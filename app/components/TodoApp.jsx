var React = require('react');
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
					id: 1,
					text: 'Walk the dog'
				}, {
					id: 2,
					text: 'Clean the kitchen'
				}, {
					id: 3,
					text: 'Craft night with friends'
				}, {
					id: 4,
					text: 'Appropriate the means of production'
				}
			]
		};
	},
	handleAddTodo: function (text) {
		alert('new todo:' + text);
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
		        	<TodoList todos={todos}/>
		        	<AddTodo onAddTodo={this.handleAddTodo}/>
		        </div>
		)
	}
});

module.exports = TodoApp;