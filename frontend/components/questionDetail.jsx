var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;


var QuestionDetail = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount: function () {
    ClientActions.fetchCurrentUser();
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

  render: function() {
    return (
      <div>QuestionDetail</div>
    );
  }

});

module.exports = QuestionDetail;
