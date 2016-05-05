var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;


var AboutDetail = React.createClass({
  getInitialState: function() {

    return {
      summary: this.props.user.about.summary,
      currentWork: this.props.user.about.current_work,
      previousExperience: this.props.user.about.previous_experience
    };
  },

  render: function() {
    return (
      <div className="about-detail-list">
          <div className="about-detail-item">
            <span className="about-detail-header">
              Summary
            </span>
            <span className="about-detail-answer">
              {this.state.summary}
            </span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-header">
              Current Work
            </span>
            <span className="about-detail-answer">
              {this.state.currentWork}
            </span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-header">
              Previous Experience
            </span>
            <span className="about-detail-answer">
              {this.state.previousExperience}
            </span>
          </div>
      </div>
    );
  }

});

module.exports = AboutDetail;
