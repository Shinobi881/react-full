var React = require('react');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins: [Reflux.listenTo(ImageStore, 'onChange')],
  render: function() {
    return <div>
      I am an image detail.
    </div>
  },
  onChange: function(event, image) {
    this.setState({
      image: image
    });
  }
});