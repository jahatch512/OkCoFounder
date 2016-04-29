var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;

var ProfileInfo = React.createClass({
  getInitialState: function() {
    return {
      user: this.props.user
    };
  },

  render: function() {

    return (

      <div id="profile-info">
          <img id="profile-picture" src={this.state.user.image_url} width="200" height="300"/>
          <div id="basic-info-box">
            <div id="basic-info-text">{this.state.user.username} • {this.state.user.title} • {this.state.user.age}</div>
          </div>
          <div id="update-button-box">
            <div id="update-button">Update Profile</div>
          </div>
      </div>

    );
  }

});

module.exports = ProfileInfo;
