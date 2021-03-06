var SessionApi = require('../util/sessionApi'),
    Dispatcher = require('../dispatcher/dispatcher'),
    UserApi = require('../util/userApi');


module.exports = {
  createUser: function (user) {
      UserApi.createUser(user);
   },

 updateAbout: function (formData) {
     UserApi.updateAbout(formData);
  },

 logoutUser: function () {
     SessionApi.logoutUser();
  },

  loginUser: function(user) {
    SessionApi.loginUser(user);
  },

  fetchUsers: function() {
    UserApi.fetchUsers();
  },

  fetchCurrentUser: function () {
    SessionApi.fetchCurrentUser();
  },

  createResponse: function(data) {
    UserApi.createResponse(data);
  },

  updateUser: function(data, id) {
    UserApi.updateUser(data, id);
  },

  clearErrors: function () {
    Dispatcher.dispatch({
      actionType: "CLEAR_ERROR",
    });
  }


};
