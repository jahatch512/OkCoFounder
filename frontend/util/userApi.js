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
        hashHistory.push('/users/about');
      },
      error: function(error) {
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
  },

  createAbout: function (formData) {
    $.ajax({
      url: "api/abouts",
      type: "POST",
      data: formData,
      success: function (data) {
        console.log("successfully persisted about to db, here it is:  " + data);
        ServerActions.receiveAbout(data);
        hashHistory.push('/users');
      },

      error: function (errors) {
        console.log("error in createAbout ajax request");
      }
    });
  }

};
