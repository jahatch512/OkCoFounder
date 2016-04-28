var React = require('react'),
    ReactDOM = require('react-dom'),
    SignIn = require('./authentication/signInForm'),
    SignUp = require('./authentication/signUpForm'),
    SessionStore = require('../stores/sessionStore'),
    ModalStyling = require('../constants/modalConstants'),
    ClientActions = require('../actions/ClientActions'),
    Modal = require('react-modal'),
    Errors = require('./errors'),
    hashHistory = require('react-router').hashHistory;

var SplashPage = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false,
      clickedSignUp: false,
      logInClicked: false,
      currentUser: SessionStore.currentUser(),
      errors: SessionStore.allErrors()
    };
  },

  componentDidMount: function () {
    this.sessionListener = SessionStore.addListener(this.onChange);
    if (this.state.currentUser !== null) {
      hashHistory.push('/users');
    }
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
    this.closeModal();
  },

  onChange: function() {
    this.setState({currentUser: SessionStore.currentUser(),
                   errors: SessionStore.allErrors()});
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
    <div>
          <div onClick={this.openModal} id='clickedSignUp'>Sign Up</div>
          <div onClick={this.openModal} id='logInClicked'>Sign In</div>
    </div>;

    if (this.state.errors.length > 0) {
      var errorMessages = <Errors errors={this.state.errors}/>;
    }

    return (
      <div className="splash_page">
        {splashPageContents}
        <Modal
          isOpen={this.state.modalIsOpen}
          style={ModalStyling.CONTENT_STYLE}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal} >
          {errorMessages}
          {modalContents}
        </Modal>
      </div>
    );
  }
});

module.exports = SplashPage;
