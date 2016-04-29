var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    UserIndexItem = require('./userIndexItem'),
    UserPage = require('./userPage'),
    hashHistory = require('react-router').hashHistory;




var UsersIndex = React.createClass({
  getInitialState: function() {
    return {
      users: UserStore.all(),
      currentUser: SessionStore.currentUser()
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
    this.setState({currentUser: SessionStore.currentUser()});
  },

  onUserChange: function() {

    this.setState({users: UserStore.all()});
  },

  render: function() {

    var renderUsers = this.state.users.map(function(user){
      return (<UserIndexItem className="user_index_item"
              key={user.id}
              user={user} />);
    });
    return (
      <div className="user_index_page">
        <div className="user_index_box">

      {
        renderUsers
      }
        </div>
      </div>
    );
  }

});

module.exports = UsersIndex;
