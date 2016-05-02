var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    ConnectionActions = require('../actions/connectionActions'),
    hashHistory = require('react-router').hashHistory;

var ProfileInfo = React.createClass({
  getInitialState: function() {
    return {
      userPage: this.props.user,
      currentUser: SessionStore.currentUser(),
    };
  },

  _isConnected: function(){
    var buttonText = "Connect";
    var currentUserConnections = this.state.currentUser.sent_connections;
    debugger
    if (currentUserConnections.indexOf(this.state.userPage) !== -1){
      buttonText = "Dis-Connect";
    }

    return buttonText;
  },

  toggleConnect: function() {
    console.log("connect button clicked");
    var data = {connection: {user_id: this.state.currentUser.id, lucky_user_id: this.state.userPage.id}};

    if (this._isConnected() === "Connect") {
      ConnectionActions.createConnection(data);
    } else {
      ConnectionActions.deleteConnection(data);
    }
  },

  handleUpdate: function() {
    console.log("update button clicked");
  },

  render: function() {

    if (this.state.userPage.id === this.state.currentUser.id){
      var cornerButton =
      <div id="update-button-box">
        <div id="update-button"
             onClick={this.handleUpdate}>
              Update Profile
        </div>
      </div>;
    }
     else {
       cornerButton =
       <div id="connect-button-box">
          <div id={this.state.connectButton}
              onClick={this.toggleConnect}>
                {this._isConnected()}
          </div>
       </div>;
     }
    return (

      <div id="profile-info">
          <img id="profile-picture"
               src={this.state.userPage.image_url}
              width="200" height="300"/>
          <div id="basic-info-box">
            <div id="show-page-username">{this.state.userPage.username}</div>
            <div id="basic-info-text">{this.state.userPage.title} • {this.state.userPage.age} • {this.state.userPage.zipcode}</div>
          </div>
          {cornerButton}
      </div>

    );
  }

});

module.exports = ProfileInfo;
