var React = require('react');

moduel.exports = React.createClass({
  render: function() {
    return <div>
      I'm a header.
      {this.props.children}
    </div>
  }
});