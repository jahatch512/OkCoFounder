var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../../stores/sessionStore'),
    SignIn = require('../authentication/signInForm'),
    ModalStyling = require('../../constants/modalConstants'),
    Modal = require('react-modal'),
    ClientActions = require('../../actions/ClientActions'),
    Errors = require('../errors'),
    hashHistory = require('react-router').hashHistory;



var navBar = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false,
      logInClicked: false,
      currentUser: SessionStore.currentUser(),
      errors: SessionStore.allErrors()
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onChange);
    ClientActions.fetchUsers();
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser(), errors: SessionStore.allErrors()});
  },

  logoutUser: function() {
    ClientActions.logoutUser();
    hashHistory.push('/');

  },

  openModal: function(event) {
    this.setState({modalIsOpen: true, logInClicked: true, errors: SessionStore.allErrors()});
  },

  afterOpenModal: function() {
    ModalStyling.content.opacity = 100;
  },

  closeModal: function() {
    this.setState({modalIsOpen: false, logInClicked: false, errors: []});
  },

  logoClick: function() {
    hashHistory.push('/');
  },

  componentDidUpdate: function() {
   if (this.state.currentUser && this.state.modalIsOpen) {
     this.closeModal();
   }
  },

  sessionClick: function(event) {
    event.preventDefault();
    this.state.currentUser ? this.logoutUser() : this.openModal();
  },

  render: function() {
    var modalContents = null;
    if (this.state.logInClicked === true) {
      modalContents = <SignIn ref="sessionForm" parent={this} />;
    }

    if (this.state.currentUser !== null) {
      var navBarSessionButton =

      <div id='logoutClicked'>
          Logout
      </div>
      ;
    } else {
      navBarSessionButton =

      <div id="logInClicked">
          Sign In
      </div>
      ;
    }

    if (this.state.errors.length > 0) {
      var errorMessages = <Errors errors={this.state.errors}/>;
    }

    return (

    <div className="navBar">
      <div id="nav-logo" onClick={this.logoClick}>
        <img id="logo-image" src="/assets/logo.png" />
      </div>
        <div
          className="nav-session-buttons"
          onClick={this.sessionClick}>
            {navBarSessionButton}
        </div>
      <Modal
        isOpen={this.state.modalIsOpen}
        style={ModalStyling}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal} >

        {errorMessages}
        {modalContents}
      </Modal>
    </div>
    );
  }

});

module.exports = navBar;
