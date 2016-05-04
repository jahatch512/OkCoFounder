var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    UserIndexItem = require('./userIndexItem'),
    UserPage = require('./userPage'),
    hashHistory = require('react-router').hashHistory;

var QuestionIndexItem = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onSessionChange);
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  onSessionChange: function() {
    console.log("called session change in question Index");
    this.setState({currentUser: SessionStore.currentUser()});
  },

  handleYes: function() {
    var questionId = this.state.currentUser.unanswered[0].id;
    var userId = this.state.currentUser.id;
    var userAnswer = "YES";
    var data = {response: {question_id: questionId, user_id: userId, user_answer: userAnswer}};
    ClientActions.createResponse(data);
  },

  handleNo: function() {
    var questionId = this.state.currentUser.unanswered[0].id;
    var userId = this.state.currentUser.id;
    var userAnswer = "NO";
    var data = {response: {question_id: questionId, user_id: userId, user_answer: userAnswer}};
    ClientActions.createResponse(data);
  },

  render: function() {
    if (this.state.currentUser.unanswered){
      var questionCount = 5 - this.state.currentUser.unanswered.length;
      var questionContent = this.state.currentUser.unanswered[0].content;
    } else {
      questionCount = 5;
    }


    return (
      <div className="questions-inner">
        <div className="question-box-item"> You have answered {questionCount} Questions! </div>
        <div className="question-box-item"> {questionContent} </div>
        <div className="answer-choice-box question-box-item">
          <div onClick={this.handleYes}
               className="answer-choice-button">YES</div>
          <div onClick={this.handleNo}
               className="answer-choice-button">NO</div>
        </div>
      </div>
    );
  }

});

module.exports = QuestionIndexItem;
