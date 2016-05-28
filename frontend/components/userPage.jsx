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
      userPage: UserStore.findUser(this.props.params.userId),
      currentTab: "about",
      aboutSelect: "detail-info-tab selected-tab",
      questionSelect: "detail-info-tab"
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onSessionChange);
    $('.app').css("background-color", "#222222");
    },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    $('.app').css("background-color", "#0284cf");
  },


  onSessionChange: function() {
    if (SessionStore.currentUser() === null){
      hashHistory.push('/');
    } else {
    this.setState({currentUser: SessionStore.currentUser()});
    }
  },

  aboutClick: function() {
    this.setState({currentTab: "about",
                   aboutSelect: "detail-info-tab selected-tab",
                   questionSelect: "detail-info-tab"});
  },

  backClick: function() {
    hashHistory.push('/');
  },

  questionClick: function() {
    this.setState({currentTab: "question",
                   questionSelect: "detail-info-tab selected-tab",
                   aboutSelect: "detail-info-tab"});
  },

  render: function() {
    if (this.state.currentTab === "about"){
      var detailBody = <AboutDetail user={this.state.userPage}
                                    id="about-detail-box" />;
    } else if (this.state.currentTab === "question"){
      detailBody = <QuestionDetail user={this.state.userPage}
                                   id="question-detail-box" />;
    }

    return (
      <div id="user-page-full">
        {
          <div className="user-page-box">
            <div onClick={this.backClick} id="back-button">back to matches</div>
            <ProfileInfo user={this.state.userPage} />
            <div id={"detail-info-buttons"}>
              <div className={this.state.aboutSelect}
                   onClick={this.aboutClick}>
                    About</div>
              <div className={this.state.questionSelect}
                   onClick={this.questionClick}>
                    Q&A</div>
            </div>
              {detailBody}
          </div>
        }

      </div>
    );
  }

});

module.exports = UserPage;
