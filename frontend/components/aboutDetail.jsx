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
    console.log(this.props.user);

    return (
      <span className="about-detail-list">
          <div>{this.state.summary}</div>
          <div>{this.state.currentWork}</div>
          <div>{this.state.previousExperience}</div>
      </span>
    );
  }

});

module.exports = AboutDetail;
