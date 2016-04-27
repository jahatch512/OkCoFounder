var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

var SessionStore = new Store(Dispatcher);

var _currentUser = null;
var _authenticationErrors = [];
var _loggedIn = false;

SessionStore.currentUser = function() {
  return _currentUser;
};

SessionStore.clearErrors = function() {
  _authenticationErrors = [];
};

SessionStore.allErrors = function() {
  return _authenticationErrors;
};

var loginUser = function(user) {
  _currentUser = user;
  console.log(_currentUser);
  _loggedIn = true;
  SessionStore.__emitChange();
};

var logoutUser = function() {
  console.log('user logged out!');
  _loggedIn = false;
  _currentUser = null;
  SessionStore.__emitChange();
};


var recieveError = function(error) {
  var errors = JSON.parse(error);
  if (errors.length >= 1) {
    errors.forEach(function(message) {
      _authenticationErrors.push(message);
    });
  } else {
    _authenticationErrors.push(errors);
  }
  SessionStore.__emitChange();
};


SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN_USER:
      loginUser(payload.user);
      break;
    case UserConstants.LOGOUT_USER:
      logoutUser();
      break;
    case UserConstants.ERROR_RECEIVED:
      recieveError(payload.error);
      break;
  }

};

module.exports = SessionStore;
