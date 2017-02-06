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
					text: 'Walk the dog'
				}, {
					id: uuid(),
					text: 'Clean the kitchen'
				}, {
					id: uuid(),
					text: 'Craft night with friends'
				}, {
					id: uuid(),
					text: 'Appropriate the means of production'
				}
			]
		};
	},
	handleAddTodo: function (text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text
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
		        	<TodoList todos={todos}/>
		        	<AddTodo onAddTodo={this.handleAddTodo}/>
		        </div>
		)
	}
});

module.exports = TodoApp;