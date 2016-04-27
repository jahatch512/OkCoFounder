var ServerActions = require('../actions/serverActions.js'),
  hashHistory = require('react-router').hashHistory;

module.exports = {
  loginUser: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(returnUser) {
        ServerActions.loginUser(returnUser);
        hashHistory.push('/users');
      },
      error: function(error) {
        ServerActions.receiveError(error.responseText);
      }
    });
  },

  logoutUser: function() {
    $.ajax({
      url: 'api/session',
      method: 'DELETE',
      success: function() {
        ServerActions.logoutUser();
        hashHistory.push('/');
      },
      error: function(error) {
        ServerActions.receiveError(error.responseText);
      }
    });
  }

};
