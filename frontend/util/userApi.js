var ServerActions = require('../actions/serverActions.js');

module.exports = {

  createUser: function(formData) {
    $.ajax({
      url: 'api/users',
      method: 'POST',
      data: formData,
      success: function(user) {
        ServerActions.loginUser(user);
      },
      error: function(error) {
        console.log(error);

        ServerActions.receiveError(error.responseText);
      }
    });
  },

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
