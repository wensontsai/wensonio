var React = require('react');
var Reflux = require('reflux');

var Charty = require('./charty');

var Actions = require('../actions');

module.exports = React.createClass({
	mixins:[
		// Reflux.listenTo(ImageStore, 'onChange')
	],
	getInitialState: function(){
		return {
			
		}
	},
	componentWillMount: function(){

	},
	render: function(){
		return(
			<div className="wigout">
			</div>
		)
	},
	componentWillReceiveProps: function(nextProps){
		
	},
	onChange: function(event, images){

	}
});