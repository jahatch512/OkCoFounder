var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    RecentIndexItem = require('./recentIndexItem'),
    hashHistory = require('react-router').hashHistory;


var RecentConnectionsIndex = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      connections: SessionStore.currentUser().sent_connections
    };
  },

  render: function() {
    var renderUsers = [];
    var that = this;
    this.state.connections.forEach(function(user){
      if (user.id !== that.state.currentUser.id){
        renderUsers.push(<RecentIndexItem className="recent_index_item"
                                        key={user.id}
                                        user={user} />);
      }
    });
    return (
      <div>
        <h1 className="index-right-headers">
          Recent Connections
        </h1>

        {renderUsers}
      </div>
    );
  }

});

module.exports = RecentConnectionsIndex;
