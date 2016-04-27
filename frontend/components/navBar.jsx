var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    ClientActions = require('../actions/ClientActions');


var navBar = React.createClass({
  getInitialState: function() {
    return {
      currentUser: SessionStore.currentUser()
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onChange);
    ClientActions.fetchUsers();
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  logoutUser: function() {
    ClientActions.logoutUser();
    
  },

  render: function() {

    if (this.state.currentUser !== null) {
      var navBarSessionButton =
      <ul>
        <li className="nav_bar_buttons">
          <button onClick={this.logoutUser} id='logoutClicked'>Logout</button>
        </li>
      </ul>;
    } else {
      navBarSessionButton = "";
    }

    return (
      <div className="navBar">
        <h1 className="logo">OkCoFounderLogo</h1>
        {navBarSessionButton}
      </div>
    );
  }

});

module.exports = navBar;
