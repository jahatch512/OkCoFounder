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
      currentTab: "about"
    };
  },

  aboutClick: function() {
    this.setState({currentTab: "about"});
  },

  questionClick: function() {
    this.setState({currentTab: "question"});
  },

  render: function() {
    console.log("infiniteloop");

    if (this.state.currentTab === "about"){
      var detailBody = <AboutDetail id="about-detail-box" />;
    } else if (this.state.currentTab === "question"){
      detailBody = <QuestionDetail id="question-detail-box" />;
    }

    return (
      <span id="user-page-full">
        {
          <div className="user-page-box">
            <ProfileInfo user={this.state.userPage} />
            <div id="detail-info-buttons">
              <div className="detail-info-tab"
                   onClick={this.aboutClick}>
                     About Detail</div>
              <div className="detail-info-tab"
                   onClick={this.questionClick}>
                   Question Detail</div>
            </div>
            <span>
              {detailBody}
            </span>
          </div>
        }

      </span>
    );
  }

});

module.exports = UserPage;
