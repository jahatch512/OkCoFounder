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

  aboutClick: function() {
    this.setState({currentTab: "about",
                   aboutSelect: "detail-info-tab selected-tab",
                   questionSelect: "detail-info-tab"});
  },

  questionClick: function() {
    this.setState({currentTab: "question",
                   questionSelect: "detail-info-tab selected-tab",
                   aboutSelect: "detail-info-tab"});
  },

  render: function() {
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
            <div id={"detail-info-buttons"}>
              <div className={this.state.aboutSelect}
                   onClick={this.aboutClick}>
                     About Detail</div>
                   <div className={this.state.questionSelect}
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
