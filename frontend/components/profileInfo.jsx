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

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onSessionChange);
    this.userStoreListener = UserStore.addListener(this.onUserChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.userStoreListener.remove();
  },


  onSessionChange: function() {
    if (SessionStore.currentUser() === null){
      hashHistory.push('/');
    } else {
    this.setState({currentUser: SessionStore.currentUser()});
    }
  },

  onUserChange: function() {
    var userId = this.state.userPage.id;
    this.setState({userPage: UserStore.findUser(userId)});
  },

  _isConnected: function(){
    var buttonText = "Connect";
    if (this.state.userPage.receive_connection_from_current){
      buttonText = "Disconnect";
    }

    return buttonText;
  },

  toggleConnect: function() {
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
          <div id={this._isConnected()}
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
