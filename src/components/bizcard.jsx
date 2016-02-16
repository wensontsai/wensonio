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
		);	
	},
	renderImages: function(){
		return this.state.images.map(function(image){
			return <ImagePreview key={image.id} {...image} />
		});
	},
	componentWillReceiveProps: function(nextProps){
		Actions.getImages(nextProps.params.id);
	},
	onChange: function(event, images){
		this.setState( {images: images} )
	}
});