var React = require('react'),
    ReactDOM = require('react-dom'),
    SignIn = require('./authentication/signIn'),
    SignUp = require('./authentication/signUp'),
    SessionStore = require('../stores/sessionStore'),
    ModalStyling = require('../constants/modalConstants'),
    ClientActions = require('../actions/ClientActions'),
    Modal = require('react-modal');

var NavBar = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false,
      clickedSignUp: false,
      logInClicked: false,
      current_user: SessionStore.currentUser()
    };
  },

  getErrors: function() {
    var errors = SessionStore.allErrors();
  },

  componentDidMount: function() {
    SessionStore.addListener(this.onChange);
  },

  onChange: function() {
    this.setState({current_user: SessionStore.currentUser()});
  },

  logoutUser: function() {
    ClientActions.logoutUser();
  },

  openModal: function(event) {
    var state = {};
    if (event.target.id === "clickedSignUp") {
      this.setState({modalIsOpen: true, clickedSignUp: true});
    } else if (event.target.id === "logInClicked") {
      this.setState({modalIsOpen: true, logInClicked: true});
    }
  },

  afterModalOpen: function() {
    this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false, logInClicked: false, clickedSignUp: false});
  },

  render: function() {

    var modalContents = null;
    if (this.state.clickedSignUp === true) {
      modalContents = <SignUp parent={this} />;
    } else if (this.state.logInClicked === true) {
      modalContents = <SignIn parent={this} />;
    }

    var navBarContents =
    <ul>
       <li className="navbar_buttons">
          <button onClick={this.openModal} id='clickedSignUp'>Sign Up</button>
       </li>
       <li className="navbar_buttons">
          <button onClick={this.openModal} id='logInClicked'>Sign In</button>
       </li>
    </ul>;

    if (this.state.current_user !== null) {
      navBarContents =
      <ul>
        <li className="navbar_buttons">
          <button onClick={this.logoutUser} id='logoutClicked'>Logout</button>
        </li>
      </ul>;
    }

    var errors = SessionStore.allErrors();

    if (errors.length > 0) {
      var errorMessage = errors[0];
    } else {
      errorMessage = "";
    }

    return (
      <ul className="navbar">
        {navBarContents}
        {errorMessage}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyling.CONTENT_STYLE} >

          <button onClick={this.closeModal}>close</button>
          {modalContents}
        </Modal>
      </ul>
    );
  }
});

module.exports = NavBar;
