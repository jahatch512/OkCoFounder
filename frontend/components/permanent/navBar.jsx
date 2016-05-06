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
    ClientActions.fetchCurrentUser();
  },

  componentWillUnmount: function() {
    this.sessionListener.remove();
  },

  onChange: function() {
    if (SessionStore.currentUser() === null){
      this.setState({currentUser: SessionStore.currentUser(), errors: SessionStore.allErrors()});
      hashHistory.push('/');
    } else {
    this.setState({currentUser: SessionStore.currentUser()});
    }
  },

  logoutUser: function() {
    ClientActions.logoutUser();
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

  profileClick: function(event) {
    event.preventDefault();
    hashHistory.push('/users/profile');
  },

  render: function() {
    var modalContents = null;
    if (this.state.logInClicked === true) {
      modalContents = <SignIn ref="sessionForm" parent={this} />;
    }

    if (this.state.currentUser !== null) {
      var navBarSessionButton =
      <div className="nav-session-buttons">
        <div id="browse-button"
             onClick={this.logoClick}>
          Matches
        </div>
        <div id="profile-button"
             onClick={this.profileClick}>
          Profile
        </div>
        <div id='logoutClicked'
             onClick={this.sessionClick}>
          Logout
        </div>
      </div>;

      var logoButton =
      <div id="nav-logo" onClick={this.logoClick}>
        <img id="logo-image" src="/assets/MatchPNGnoWatermark.png" />
      </div>;

    } else {
      navBarSessionButton =
      <div className="nav-session-buttons">
        <div id="logInClicked"
             onClick={this.sessionClick}>
            Sign In
        </div>
      </div>;

      logoButton =
      <div id="nav-logo" onClick={this.logoClick}>
        <img id="logo-image" src="/assets/justOkCoFounder.png" />
      </div>;
    }

    if (this.state.errors.length > 0) {


      var errorMessages = <Errors errors={this.state.errors}/>;
    }


    return (

    <div className="navBar">
      {logoButton}
      {navBarSessionButton}
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
