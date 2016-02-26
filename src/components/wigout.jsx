var React = require('react');
var Reflux = require('reflux');

// var Charty = require('./charty');

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
				<div className="row">
					<div className="story">
					Wenson Tsai is a Fullstack Software Engineer and Musician who spends his most precious moments creating.  Whether building excitement and experiences through code, technology, songwriting, or performance, the focus always remains on next-level innovation and craftsmanship.  Previously, he worked in the music industry processing licenses for all the major players: Spotify, Apple, major music labels, etc. The software he built turned data into royalty checks for everyone whose music you have ever enjoyed.  In a previous life, he was a photographer who traveled and exhibited internationally.
					</div>
				</div>
			</div>
		)
	},
	componentWillReceiveProps: function(nextProps){
		
	},
	onChange: function(event, images){

	}
});