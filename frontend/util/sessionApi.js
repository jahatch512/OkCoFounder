var ServerActions = require('../actions/serverActions.js');

module.exports = {
  loginUser: function(formData) {
    $.ajax({
      url: 'api/session',
      method: 'POST',
      data: formData,
      success: function(user) {
        ServerActions.loginUser(user);
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
      },
      error: function(error) {
        ServerActions.receiveError(error.responseText);
      }
    });
  }

};
