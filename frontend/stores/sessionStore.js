var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');
var ResponseConstants = require('../constants/responseConstants');
var AboutConstants = require('../constants/aboutConstants');
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

SessionStore.allErrors = function() {
  return _authenticationErrors;
};

var clearErrors = function() {
  _authenticationErrors = [];
  SessionStore.__emitChange();
};

SessionStore.loggedIn = function() {
  return _loggedIn;
};

var receiveNewResponse = function(response) {
  _currentUser.responses.push(response.response);
  if (_currentUser.unanswered.length > 0){
    _currentUser.unanswered = _currentUser.unanswered.slice(1);
  }
  SessionStore.__emitChange();
};

var loginUser = function(user) {
  _currentUser = user;
  myStorage.setItem("currentUser", JSON.stringify(user));
  _loggedIn = true;
  clearErrors();
  SessionStore.__emitChange();
};

var receiveCurrent = function(user) {
  if (user.message){
    logoutUser();
  } else {
    _currentUser = user;
  }
  SessionStore.__emitChange();
};

var logoutUser = function() {
  myStorage.setItem("currentUser", "false");
  _loggedIn = false;
  _currentUser = null;
  clearErrors();
  SessionStore.__emitChange();
};


var recieveError = function(error) {
  _authenticationErrors = JSON.parse(error).message;
    SessionStore.__emitChange();
};

var updateAbout = function (about) {
  _currentUser.about = about;
};


SessionStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.LOGIN_USER:
      loginUser(payload.user);
      break;
    case UserConstants.LOGOUT_USER:
      logoutUser();
      break;
    case UserConstants.RECEIVE_CURRENT_USER:
      receiveCurrent(payload.user);
      break;
    case UserConstants.ERROR_RECEIVED:
      recieveError(payload.error);
      break;
    case "CLEAR_ERROR":
      clearErrors();
      break;
    case ResponseConstants.RECEIVE_SINGLE_RESPONSE:
      receiveNewResponse(payload.response);
      break;
    case AboutConstants.RECEIVE_SINGLE_ABOUT:
      updateAbout(payload.about);
      break;
  }

};

module.exports = SessionStore;
