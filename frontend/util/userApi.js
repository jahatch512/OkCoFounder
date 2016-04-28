var ServerActions = require('../actions/serverActions.js'),
    hashHistory = require('react-router').hashHistory;

module.exports = {

  createUser: function(formData) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: formData,
      success: function(user) {
        ServerActions.loginUser(user);
        hashHistory.push('/users');
      },
      error: function(error) {
        console.log("userApi " + error.responseText);

        ServerActions.receiveError(error.responseText);
      }
    });
  },

  fetchUsers: function () {
    $.ajax({
      url: "api/users",
      type: "GET",
      success: function (users) {
        ServerActions.receiveUsers(users);
      },
      error: function (errors) {
        console.log("userApi fetch " + errors.responseText);
      }
    });
  },

  fetchSingleUser: function (id) {
    $.ajax({
      url: "api/users" + id,
      type: "GET",
      success: function (user) {
        ServerActions.receiveSingleUser(user);
      }
    });
  }



  //  createAbout: function (formData) {
  //     $.ajax({
  //     url: "api/abouts",
  //   type: "POST",
  //   data: formData,
  //   success: function (data) {
  //     ServerActions.createAbout(data);
  //   }
  //   });
  //   }

};
