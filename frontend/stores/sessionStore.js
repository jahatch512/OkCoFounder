var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');
var myStorage = localStorage;
var SessionStore = new Store(Dispatcher);

var _currentUser = JSON.parse(myStorage.getItem("currentUser"));
var _authenticationErrors = [];
var _loggedIn = false;

SessionStore.currentUser = function() {
  if (myStorage.getItem("currentUser") === "false"){
    return null;
  } else {
    return _currentUser;
  }
};

SessionStore.clearErrors = function() {
  _authenticationErrors = [];
};

SessionStore.allErrors = function() {
  return _authenticationErrors;
};

var loginUser = function(user) {
  _currentUser = user;
  myStorage.setItem("currentUser", JSON.stringify(user));
  _loggedIn = true;
  SessionStore.clearErrors();
  SessionStore.__emitChange();
};

var logoutUser = function() {
  console.log('SessionStore user logged out!');
  myStorage.setItem("currentUser", "false");
  _loggedIn = false;
  _currentUser = null;

  SessionStore.clearErrors();
  SessionStore.__emitChange();
};


var recieveError = function(error) {
  var errorMessage = JSON.parse(error).message;

  _authenticationErrors.push(errorMessage);

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
      console.log("Session Store" + JSON.parse(payload.error).message);
      console.log("Session Store errorMessage " + payload.error["message"]);

      recieveError(payload.error);
      break;
  }

};

module.exports = SessionStore;
