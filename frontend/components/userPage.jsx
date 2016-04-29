var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    ProfileInfo = require('./profileInfo'),
    AboutDetail = require('./aboutDetail'),
    QuestionDetail = require('./questionDetail'),
    hashHistory = require('react-router').hashHistory;

var UserPage = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      userPage: UserStore.findUser(this.props.params.userId)
    };
  },

  render: function() {

    return (
      <span id="user-page-full">
        {
          <div className="user-page-box">
            <ProfileInfo user={this.state.userPage} />
            <div id="detail-info">
              <AboutDetail user={this.state.userPage} />
              <QuestionDetail user={this.state.userPage} />
            </div>
          </div>
        }

      </span>
    );
  }

});

module.exports = UserPage;
