var Store = require('flux/utils').Store,
    Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/userConstants'),
    ConnectionConstants = require('../constants/connectionConstants'),
    AboutConstants = require('../constants/aboutConstants');

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

var updateAbout = function (about) {
  _users[about.user_id].about = about;
};

var updateConnection = function(connection) {
  _users[connection.lucky_user_id].receive_connection_from_current = true;
  UserStore.__emitChange();
};

var deleteConnection = function(connection) {
  _users[connection.lucky_user_id].receive_connection_from_current = false;
  UserStore.__emitChange();
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.CREATE_USER:
      addUser(payload.user);
      break;
    case UserConstants.RECEIVE_USERS:
      resetUsers(payload.users);
      UserStore.__emitChange();
      break;
    case AboutConstants.RECEIVE_SINGLE_ABOUT:
      updateAbout(payload.about);
      break;
    case ConnectionConstants.RECEIVE_CONNECTION:
      updateConnection(payload.connection);
      break;
    case ConnectionConstants.REMOVE_CONNECTION:
      deleteConnection(payload.connection);
      break;
  }
};

module.exports = UserStore;
