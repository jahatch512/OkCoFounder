var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;

var CurrentUserProfileInfo = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onSessionChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },


  onSessionChange: function() {
    if (SessionStore.currentUser() === null){
      hashHistory.push('/');
    } else {
    this.setState({currentUser: SessionStore.currentUser()});
    }
  },

  handleUpdate: function() {
    console.log("update button clicked");
  },

  render: function() {


      var cornerButton =
      <div id="update-button-box">
        <div id="update-button"
             onClick={this.handleUpdate}>
              Update Profile
        </div>
      </div>;

    return (

      <div id="profile-info">
          <img id="profile-picture"
               src={this.state.currentUser.image_url}
              width="200" height="300"/>
          <div id="basic-info-box">
            <div id="show-page-username">{this.state.currentUser.username}</div>
            <div id="basic-info-text">{this.state.currentUser.title} • {this.state.currentUser.age} • {this.state.currentUser.zipcode}</div>
          </div>

      </div>

    );
  }

});

module.exports = CurrentUserProfileInfo;
