var React = require('react');
var Reflux = require('reflux');
var BizCard = require('./bizcard');
var Wigout = require('./wigout');

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
			<div className="pageCenter">
				<div className="main"> 
					<BizCard />
					<Wigout />
				</div>
			</div>
		)
	},
	componentWillReceiveProps: function(nextProps){
		
	},
	onChange: function(event, images){

	}
});