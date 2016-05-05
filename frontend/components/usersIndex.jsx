var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    UserIndexItem = require('./userIndexItem'),
    UserPage = require('./userPage'),
    QuestionIndexItem = require('./questionIndexItem'),
    hashHistory = require('react-router').hashHistory;




var UsersIndex = React.createClass({
  getInitialState: function() {
    return {
      users: UserStore.all(),
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount: function () {
    ClientActions.fetchUsers();
    ClientActions.fetchCurrentUser();
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
    this.setState({users: UserStore.all()});
  },

  render: function() {
    var renderUsers = [];
    var that = this;
    this.state.users.forEach(function(user){
      if (user.id !== that.state.currentUser.id){
        renderUsers.push(<UserIndexItem className="user_index_item"
                                        key={user.id}
                                        user={user} />);
      }
    });


    return (
      <div className="user_index_page">
        <div className="user_index_box">

      {
        renderUsers
      }
        </div>
        <div className="questions-box">
          <QuestionIndexItem />
        </div>
        {this.props.children}
      </div>
    );
  }

});

module.exports = UsersIndex;
