var React = require('react');
var TodoList = require('TodoList');

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
	render: function () {
		var {todos} = this.state;

		return (
		        <div>
		        	<TodoList todos={todos}/>
		        </div>
		)
	}
});

module.exports = TodoApp;