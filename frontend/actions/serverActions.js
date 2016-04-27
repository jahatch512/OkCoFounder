
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

module.exports = {

  loginUser: function (user) {
    console.log("user logged in!");
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_USER,
      user: user
    });
  },

  logoutUser: function () {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGOUT_USER,
    });
  },

  deleteUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.DESTROY_USER,
      user: user
    });
  },

  receiveError: function(error) {
    Dispatcher.dispatch({
      actionType: UserConstants.ERROR_RECEIVED,
      error: error
    });
  }
};
