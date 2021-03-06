var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    QuestionWithResponse = require('./questionWithResponse'),
    QuestionsConstants = require('../constants/questionsConstants'),
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

    this.state.userPage.responses.forEach(function(response){
      questionsAndResponses.push(<QuestionWithResponse
            key={response.question_id}
            question={QuestionsConstants[response.question_id - 1]}
            response={response.user_answer} />);
    });

    return (
      <div className="question-detail-list">{questionsAndResponses}</div>
    );
  }

});

module.exports = QuestionDetail;
