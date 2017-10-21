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
                            <li><a href="http://hackers.wenson.io" target="blank"><i className="fa fa-newspaper-o big-icon"></i></a></li>
                            // <li><a href="http://reportage.wenson.io" target="blank"><i className="fa fa-camera-retro big-icon"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row story">
                    // <div className="story">
                    //     Wenson Tsai is a Fullstack Software Engineer and Musician who spends his most precious moments creating.  Whether building excitement and experiences through code, product, technology, songwriting, or performance, the focus remains on next-level innovation and craftsmanship.
                    //     Previously, he worked in the music industry processing licenses and deals for all the major players: Spotify, Apple, Google, major music labels, et al. The software he wrote turned data into royalty checks for everyone whose music you have ever enjoyed.  
                    //     Presently, he writes the <a href="https://www.makerbot.com/print/" target="blank">desktop app</a> for 3D-printing dreams to life, while pushing model-slicing and toolpathing algorithms towards industry innovation.  
                    //     In another life, he was a <a href="https://www.flickr.com/photos/itswenson/" target="blank">photographer</a> who traveled and exhibited internationally.
                    // </div>
                    <div className="story">
                        Hi there.  Thanks for checking me out.

                        I like creating things and working on interesting problems.  

                        Currently, I am in the 3D-printing space (FDM/FFF), as part of an exciting community of makers, tinkerers, and new manufacturers.  I work on Toolpathing at <a href="https://www.makerbot.com/" target="blank">MakerBot Industries</a>.  Toolpathing is the processing of 3D model files into a set of machine instructions for printers to execute.  The final toolpath is affected by features and adjustments with producing the best print (aesthetics/structural integrity) in the best way (speed/accuracy) usually the goal.  This allows for a lot of creativity and innovation when developing features as Toolpathing Engineers play in a sandbox where computer science, math, physics, robotics, sculpture, and art swirl together.

                        Previous to this, I worked in the music industry writing apps that crunched serious data for all the major labels, Spotify, Apple, et al.  The software I wrote calculated and distributed royalty payments to every artist whose music is enjoyed all over the world.

                        I am always looking to collaborate on projects.  If we can work on something cool, please let me know.
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