
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

module.exports = {

  loginUser: function (user) {
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
  },

  receiveUsers: function (users) {
    console.log(users);

    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USERS,
      users: users
    });
  },

  receiveSingleUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_SINGLE_USER,
      user: user
    });
  }
};
