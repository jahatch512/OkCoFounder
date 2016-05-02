var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;

var ProfileInfo = React.createClass({
  getInitialState: function() {
    return {
      user: this.props.user,
      currentUser: SessionStore.currentUser()
    };
  },

  render: function() {

    if (this.state.user.id === this.state.currentUser.id){
      var updateButton =
      <div id="update-button-box">
        <div id="update-button">Update Profile</div>
      </div>;
    }
    
    return (

      <div id="profile-info">
          <img id="profile-picture"
               src={this.state.user.image_url}
              width="200" height="300"/>
          <div id="basic-info-box">
            <div id="show-page-username">{this.state.user.username}</div>
            <div id="basic-info-text">{this.state.user.title} • {this.state.user.age} • {this.state.user.zipcode}</div>
          </div>
          {updateButton}
      </div>

    );
  }

});

module.exports = ProfileInfo;
