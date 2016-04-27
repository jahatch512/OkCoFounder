var ServerActions = require('../actions/serverActions.js');

module.exports = {
  loginUser: function(user) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: user,
      success: function(returnUser) {
        ServerActions.loginUser(returnUser);
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
        console.log("we logged out!");

        ServerActions.logoutUser();
      },
      error: function(error) {
        console.log('something went wrong');
        ServerActions.receiveError(error.responseText);
      }
    });
  }

};
