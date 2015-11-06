var React = require('react');
var Reflux = require('reflux');

var Actions = require('../actions');
var ImageStore = require('../stores/image-store');


var ImagePreview = require('./image-preview');

module.exports = React.createClass({
	mixins: [
		Reflux.listenTo(ImageStore, 'onChange')
	],
	getInitialState: function(){
		return{
			images: []
		}
	},
	componentWillMount: function(){
		Actions.getImages(this.props.params.id);
	},
	render: function(){
		return(
			<div className="topic">
				{this.renderImages()}
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