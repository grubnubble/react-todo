var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
	getInitialState: function () {
		return {
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
	render: function () {
		var {todos} = this.state;

		return (
		        <div>
		        	<TodoList todos={todos}/>
		        	<AddTodo onAddTodo={this.handleAddTodo}/>
		        </div>
		)
	}
});

module.exports = TodoApp;