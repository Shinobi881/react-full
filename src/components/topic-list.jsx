var React = require('react');
var TopicStore = require('../stores/topic-store');
var Reflux = require('reflux');

module.exports = React.createClass({
  mixins: [
    Reflux.listenTo(TopicStore, "onChange")
  ],
  getInitialState: function() {
    return {
      topics: []
    }
  },
  componentWillMount: function() {
    TopicStore.getTopics();
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
  },
  onChange: function(event, topic) {
    this.setState({topics: topic});
  }

});