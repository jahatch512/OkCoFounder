var ServerActions = require('../actions/serverActions'),
    hashHistory = require('react-router').hashHistory;

module.exports = {

  createUser: function(formData) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: formData,
      success: function(user) {
        ServerActions.loginUser(user);
        ServerActions.createUser(user);
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

  updateAbout: function (formData) {
    $.ajax({
      url: "api/abouts",
      type: "PATCH",
      data: formData,
      success: function (data) {
        ServerActions.receiveAbout(data);
        hashHistory.push('/users');
      },

      error: function (errors) {
      }
    });
  },

  createConnection: function (connection, callback) {
    $.ajax({
      url: "api/connections",
      type: "POST",
      data: connection,
      success: callback
    });
  },

   deleteConnection: function (connection, callback) {
    $.ajax({
      url: "api/connections",
      type: "DELETE",
      data: connection,
      success: callback
    });
  },

   createResponse: function (response) {
     var that = this;
    $.ajax({
      url: "api/responses",
      type: "POST",
      data: response,
      success: function (data) {
        ServerActions.receiveResponse(data);
        that.fetchUsers();
      },

      error: function (data) {

      }
    });
  },

   updateUser: function (formData, id) {
    $.ajax({
      url: "api/users/" + id,
      type: "PATCH",
      data: formData,
      success: function (currentUser) {
      ServerActions.receiveCurrentUser(currentUser);
      }
    });
  }

};
