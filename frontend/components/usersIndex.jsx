var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    UserIndexItem = require('./userIndexItem');



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
    console.log("UsersINdex did mount");

  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.userStoreListener.remove();
  },

  onSessionChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  onUserChange: function() {
    console.log("UsersIndex Store Change");

    this.setState({users: UserStore.all()});
  },

  render: function() {
    console.log("userindex render");

    var renderUsers = this.state.users.map(function(user){
      return (<UserIndexItem className="user_index_item"
              key={user.id} user={user} />);
    });
    return (
      <div className="user_index">
      {
        <div className="user_index_list">
          {renderUsers}
        </div>
      }
      UsersIndexPage
      </div>
    );
  }

});

module.exports = UsersIndex;
