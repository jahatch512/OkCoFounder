var SessionApi = require('../util/sessionApi'),
    UserApi = require('../util/userApi');


module.exports = {
  createUser: function (user) {
      UserApi.createUser(user);
   },

 createAbout: function () {
     UserApi.createAbout();
  },

 logoutUser: function () {
     SessionApi.logoutUser();
  },

  loginUser: function(user) {
    SessionApi.loginUser(user);
  }



};
