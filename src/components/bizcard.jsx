var React = require('react');

var Reflux = require('reflux');

var Actions = require('../actions');

module.exports = React.createClass({
	mixins: [
		// Reflux.listenTo(ImageStore, 'onChange')
	],
	getInitialState: function(){
		return{
			images: []
		}
	},
	componentWillMount: function(){
		// Actions.getImages(this.props.params.id);
	},
	render: function(){
		return(
			<div className="bizcard">
				<div className="row content">
					<div className="content">
						<span className="name">Wenson Tsai</span>
						<span className="info">Fullstack Software Engineer / Developer / Musician</span>
					</div>
					<div className="links">
						<ul>
							<li><a href="https://twitter.com/itswenson" target="blank"><i className="fa fa-twitter big-icon"></i></a></li>
							<li><a href="https://github.com/wensontsai" target="blank"><i className="fa fa-github big-icon"></i></a></li>
							<li><a href="https://linkedin.com/in/wensontsai" target="blank"><i className="fa fa-linkedin big-icon"></i></a></li>
						</ul>
					</div>
				</div>
				<div className="row story">
					<div className="story">
					Wenson Tsai is a Fullstack Software Engineer and Musician who spends his most precious moments creating.  Whether building excitement and experiences through code, technology, songwriting, or performance, the focus always remains on next-level innovation and craftsmanship.  Previously, he worked in the music industry processing licenses for all the major players: Spotify, Apple, major music labels, etc. The software he built turned data into royalty checks for everyone whose music you have ever enjoyed.  In a previous life, he was a photographer who traveled and exhibited internationally.
					</div>
				</div>
			</div>
		);	
	},
	renderImages: function(){
		return this.state.images.map(function(image){
			return <ImagePreview key={image.id} {...image} />
		});
	},
	componentWillReceiveProps: function(nextProps){
		// Actions.getImages(nextProps.params.id);
	},
	onChange: function(event, images){
		this.setState( {images: images} )
	}
});