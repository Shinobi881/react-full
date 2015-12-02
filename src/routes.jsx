var React = require('react');
var ReactRouter = require('react-router');
var HashHistory = require('react-router/lib/hashhistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

module.exports = (
  <Router history={new HashHistory}>
    <Route path="/" component={Hello}>
      <Route path="1" component={Child1}>
        <Route path="2" component={Child2}/>

      </Route>
      <Route path="2" component={Child2}/>
    </Route>
  </Router>
)