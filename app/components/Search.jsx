var React = require('react');

var Search = React.createClass({
	handleSearch: function () {
		var showCompleted = this.refs.showCompleted.checked;
		var searchText = this.refs.searchText.value;

		this.props.onSearch(showCompleted, searchText);
	},
	render: function () {
		return (
		        <div>
		        	<div>
		        		<input type="search" ref="searchText" placeholder="Search tasks" onChange={this.handleSearch}/>
		        	</div>
		        	<div>
		        		<label>
		        			<input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
		        			Show completed tasks
		        		</label>
		        	</div>
			</div>
		)
	}
});

module.exports = Search;