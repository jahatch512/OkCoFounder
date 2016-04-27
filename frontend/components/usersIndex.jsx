var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions');

var PropTypes = React.PropTypes;

var UsersIndex = React.createClass({

  render: function() {
    return (
      <div>Users Index Page</div>
    );
  }

});

module.exports = UsersIndex;
