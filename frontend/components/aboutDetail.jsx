var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;


var AboutDetail = React.createClass({

  render: function() {
    return (
      <div>AboutDetail</div>
    );
  }

});

module.exports = AboutDetail;
