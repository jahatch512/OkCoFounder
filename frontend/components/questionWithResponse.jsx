var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;





var QuestionWithResponse = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
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

  render: function() {



    return (
      <div className="question-with-response">
        <div>{this.props.question}</div>
        <div>{this.props.response}</div>
      </div>

    );
  }

});

module.exports = QuestionWithResponse;
