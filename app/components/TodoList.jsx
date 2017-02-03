var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function () {
		var {todos} = this.props;

		var renderTodos = () => {
			return todos.map((task) => {
				return (
				        <Todo key={task.id} {...task}/>
				)
			});
		};

		return (
		        <div>
		        	{renderTodos()}
		        </div>
		)
	}
})

module.exports = TodoList;