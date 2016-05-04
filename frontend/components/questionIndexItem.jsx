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

  onSessionChange: function() {
    console.log("called session change in question Index");
    this.setState({currentUser: SessionStore.currentUser()});
  },

  handleYes: function(event) {
    console.log("selected Yes");

  },

  handleNo: function(event) {
    console.log("selected No");

  },

  render: function() {
    if (this.state.currentUser.unanswered){
      var questionCount = 20 - this.state.currentUser.unanswered.length;
      var questionContent = this.state.currentUser.unanswered[0].content;
    } else {
      questionCount = "twenty";
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
