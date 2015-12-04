var React = require('react');
var Api = require('../utils/api')

module.exports = React.createClass({
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    Api.get('topics/defaults')
      .then(function(data) {
        this.setState({
          topics: data.data
        })
        console.log(data);
      }.bind(this));
  },
  render: function() {
    return <div className="list-group">
      {this.renderTopics()}
    </div>
  },
  renderTopics: function() {
    return this.state.topics.map(function(topic) {
      return <li>
        {topic}
      </li>
    })
  }
});