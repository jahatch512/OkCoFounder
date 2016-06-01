var React = require('react'),
SessionStore = require('../../stores/sessionStore'),
PropTypes = React.PropTypes;

var Footer = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onChange);
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  render: function() {
    if (this.state.currentUser !== null) {
      console.log(this.state.currentUser);

      return <div id="footer"></div>;
    } else {
      console.log(this.state.currentUser);

      return <div id="splash-footer"></div>;
    }
  }

});

module.exports = Footer;
