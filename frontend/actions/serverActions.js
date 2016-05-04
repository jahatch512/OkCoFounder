var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/userConstants'),
    ResponseConstants = require('../constants/responseConstants'),
    aboutConstants = require('../constants/aboutConstants');

module.exports = {

  loginUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.LOGIN_USER,
      user: user
    });
  },

  createUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.CREATE_USER,
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
  },

  receiveCurrentUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      user: user
    });
  },

  receiveAbout: function (about) {
    Dispatcher.dispatch({
      actionType: aboutConstants.RECEIVE_SINGLE_ABOUT,
      about: about
    });
  },

  receiveResponse: function (response) {
    Dispatcher.dispatch({
      actionType: ResponseConstants.RECEIVE_SINGLE_RESPONSE,
      response: response
    });
  }
};
