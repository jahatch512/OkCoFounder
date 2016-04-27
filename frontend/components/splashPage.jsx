var React = require('react'),
    ReactDOM = require('react-dom'),
    SignIn = require('./authentication/signIn'),
    SignUp = require('./authentication/signUp'),
    SessionStore = require('../stores/sessionStore'),
    ModalStyling = require('../constants/modalConstants'),
    ClientActions = require('../actions/ClientActions'),
    Modal = require('react-modal');

var SplashPage = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false,
      clickedSignUp: false,
      logInClicked: false,
      currentUser: SessionStore.currentUser()
    };
  },

  getErrors: function() {
    var errors = SessionStore.allErrors();
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onChange);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser()});
  },

  openModal: function(event) {
    var state = {};
    if (event.target.id === "clickedSignUp") {
      this.setState({modalIsOpen: true, clickedSignUp: true});
    } else if (event.target.id === "logInClicked") {
      this.setState({modalIsOpen: true, logInClicked: true});
    }
  },

  afterOpenModal: function() {
    // this.refs.sessionForm.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false, logInClicked: false, clickedSignUp: false});
  },

  render: function() {

    var modalContents = null;
    if (this.state.clickedSignUp === true) {
      modalContents = <SignUp ref="sessionForm" parent={this} />;
    } else if (this.state.logInClicked === true) {
      modalContents = <SignIn ref="sessionForm" parent={this} />;
    }

    var splashPageContents =
    <ul>
       <li className="splash_page_buttons">
          <button onClick={this.openModal} id='clickedSignUp'>Sign Up</button>
       </li>
       <li className="splash_page_buttons">
          <button onClick={this.openModal} id='logInClicked'>Sign In</button>
       </li>
    </ul>;

    if (this.state.currentUser !== null) {
      splashPageContents = "";
    }

    var errors = SessionStore.allErrors();

    if (errors.length > 0) {
      var errorMessage = errors[0];
    } else {
      errorMessage = "";
    }

    return (
      <ul className="splash_page">
        {splashPageContents}
        {errorMessage}
        <Modal
          isOpen={this.state.modalIsOpen}
          style={ModalStyling.CONTENT_STYLE}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal} >

          <button onClick={this.closeModal}>close</button>
          {modalContents}
        </Modal>
      </ul>
    );
  }
});

module.exports = SplashPage;
