var SessionApi = require('../util/sessionApi'),
    UserApi = require('../util/userApi');


module.exports = {
  createUser: function (user) {
      UserApi.createUser(user);
   },

 createAbout: function (formData) {
     UserApi.createAbout(formData);
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
   }




};
