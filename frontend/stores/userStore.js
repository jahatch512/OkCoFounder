var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

var UserStore = new Store(Dispatcher);

var _users = {};
var _newUserErrors = [];

UserStore.all = function () {
  return Object.assign({}, _users);
};

var addUser = function(user) {
  _users[user.id] = user;
};

var findUser = function(id) {
  return _users[id];
};

UserStore.clearErrors = function() {
  _newUserErrors = [];
};

UserStore.allErrors = function() {
  return _newUserErrors;
};

var recieveError = function(error) {
  var errors = JSON.parse(error);
  if (errors.length >= 1) {
    errors.forEach(function(message) {
      _newUserErrors.push(message);
    });
  } else {
    _newUserErrors.push(errors);
  }
  UserStore.__emitChange();
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.CREATE_USER:
      addUser(payload.user);
      break;
  }
};
