var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher.js'),
    UserConstants = require('../constants/userConstants.js');

var UserStore = new Store(Dispatcher);

var _users = {};
var _errors = [];

UserStore.all = function () {

  var _usersArray = [];
  for (var id in _users) {
    if (_users.hasOwnProperty(id)) {
      _usersArray.push(_users[id]);
    }
  }
  return _usersArray;
};

UserStore.setErrors = function(errors){
  _errors = errors;
};

UserStore.errors = function(){
  if (_errors){
    return [].slice.call(_errors);
  }
};

UserStore.findUser = function(id) {
  return _users[id];
};

var addUser = function(user) {
  _users[user.id] = user;
};

var resetUsers = function (users) {
  _users = {};
  users.forEach(function (user) {
    _users[user.id] = user;
  });
};



UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.CREATE_USER:
      addUser(payload.user);
      break;
    case UserConstants.RECEIVE_USERS:
      resetUsers(payload.users);
      UserStore.__emitChange();
  }
};

module.exports = UserStore;
