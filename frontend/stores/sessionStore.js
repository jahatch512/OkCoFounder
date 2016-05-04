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

SessionStore.allErrors = function() {
  return _authenticationErrors;
};

SessionStore.clearErrors = function() {
  _authenticationErrors = [];
};

SessionStore.loggedIn = function() {
  return _loggedIn;
};

// SessionStore.allCurrentQuestions = function() {
//   var _questions = [];
//   for (var id in _users) {
//     if (_users.hasOwnProperty(id)) {
//       _usersArray.push(_users[id]);
//     }
//   }
//   return _usersArray;
// }

var loginUser = function(user) {
  _currentUser = user;
  myStorage.setItem("currentUser", JSON.stringify(user));
  _loggedIn = true;
  SessionStore.clearErrors();
  SessionStore.__emitChange();
};

var receiveCurrent = function(user) {
  console.log("current received in session store");

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
  SessionStore.clearErrors();
  SessionStore.__emitChange();
};


var recieveError = function(error) {
  _authenticationErrors = JSON.parse(error).message;
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
    case UserConstants.RECEIVE_CURRENT_USER:
      receiveCurrent(payload.user);
      break;
    case UserConstants.ERROR_RECEIVED:
      recieveError(payload.error);
  }

};

module.exports = SessionStore;
