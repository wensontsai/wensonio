var React = require('react');
var Reflux = require('reflux');
var BizCard = require('./bizcard');
// var Wigout = require('./wigout');


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
				<video muted autoPlay id="bgvid" src="../../endless_planet.mp4" loop>
				</video>
				<div className="main"> 
					<BizCard />
				</div>
				<div id="footer" className="credit">
					Video courtesy of <a href="http://www.beeple-crap.com/" target="blank">Beeple</a> under Creative Commons License
				</div>
			</div>
		)
	},
	componentWillReceiveProps: function(nextProps){
		
	},
	onChange: function(event, images){

	}
});