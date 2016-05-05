var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    QuestionWithResponse = require('./questionWithResponse'),
    hashHistory = require('react-router').hashHistory;


var QuestionDetail = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser(),
      userPage: this.props.user
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
    var questionsAndResponses = [];
    var allQuestions = this.state.currentUser.all_questions;

    this.state.userPage.responses.forEach(function(response){
      questionsAndResponses.push(<QuestionWithResponse
            key={response.question_id}
            question={allQuestions[response.question_id - 1].content}
            response={response.user_answer} />);
    });

    return (
      <div>{questionsAndResponses}</div>
    );
  }

});

module.exports = QuestionDetail;
