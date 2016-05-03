var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    ProfileInfo = require('./profileInfo'),
    AboutDetail = require('./aboutDetail'),
    QuestionDetail = require('./questionDetail'),
    hashHistory = require('react-router').hashHistory;

var ProfilePage = React.createClass({
  getInitialState: function() {
    return {
      currentUser: UserStore.findUser(SessionStore.currentUser().id),
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
      var detailBody = <AboutDetail user={this.state.currentUser}
                                    id="about-detail-box" />;
    } else if (this.state.currentTab === "question"){
      detailBody = <QuestionDetail user={this.state.currentUser}
                                   id="question-detail-box" />;
    }

    return (
      <div id="user-page-full">
        {
          <div className="user-page-box">
            <ProfileInfo user={this.state.currentUser} />
            <div id={"detail-info-buttons"}>
              <div className={this.state.aboutSelect}
                   onClick={this.aboutClick}>
                     About Detail</div>
                   <div className={this.state.questionSelect}
                   onClick={this.questionClick}>
                   Question Detail</div>
            </div>
            <div>
              {detailBody}
            </div>
          </div>
        }

      </div>
    );
  }

});

module.exports = ProfilePage;
