var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;

var UserPage = React.createClass({

  render: function() {
    return (
      <div>UserPage</div>
    );
  }

});

module.exports = UserPage;
