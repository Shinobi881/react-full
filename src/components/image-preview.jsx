var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

// module.exports = React.createClass({
//   render: function() {
//     return <div>
//       I am an image with ID: {this.props.id}
//     </div>
//   }
// });

module.exports = React.createClass({
  getInitialState: function() {
    return {
      hovering: false
    }
  },
  render: function() {
    return <Link 
      to={"images/" + this.props.id}
      className="image-preview"
      onMouseEnter={this.handleMouseEnter}
      onMouseLeave={this.handleMouseLeave}
      >
      {this.props.animated && this.state.hovering ? this.video() : this.image()}
      {this.props.animated && !this.state.hovering ? this.icon() : null}
    </Link>
  },
  image: function() {
    var link = 'http://i.imgur.com/' + this.props.id + 'h.jpg';



    return <img src={link} />
  }, 
  video: function() {
    return <div>
      <video preload="auto" autoPlay="autoplay" loop="loop" webkit-playsinline>
        <source src={this.props.mp4} type="video/mp4"></source>
      </video>
    </div>
  }, 
  handleMouseEnter: function() {
    this.setState({hovering: true});
  },
  handleMouseLeave: function() {
    this.setState({hovering: false});
  },
  icon: function () {
    return <span className="glyphicon glyphicon-play"></span>
  }
});