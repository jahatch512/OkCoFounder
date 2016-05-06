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
      guestLogin: false,
      currentUser: SessionStore.currentUser(),
      errors: SessionStore.allErrors(),
      title: "CEO"
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
    this.setState({currentUser: SessionStore.currentUser(), errors: SessionStore.allErrors()});
  },

  openModal: function(event) {
    var state = {};
    if (event.target.id === "sign-up-button") {
      this.setState({modalIsOpen: true, clickedSignUp: true});
    } else if (event.target.id === "guestLogin") {
      this.setState({modalIsOpen: true, guestLogin: true});
    }
  },

  afterOpenModal: function() {
    ModalStyling.content.opacity = 100;
    ClientActions.clearErrors();

  },

  closeModal: function() {
    this.setState({modalIsOpen: false, guestLogin: false, clickedSignUp: false, errors: []});


  },

  titleChange: function(event){
    event.preventDefault();
    this.setState({title: event.target.value});
  },

  loginGuest: function() {
    var user = {user: {
      username: "AwesomePerson",
      password: "password"
    }};
    ClientActions.loginUser(user);
  },

  render: function() {
    var modalContents = null;
    if (this.state.clickedSignUp === true) {
      modalContents = <SignUp ref="sessionForm" parent={this} title={this.state.title}/>;
    } else if (this.state.guestLogin === true) {
      modalContents = <SignIn ref="sessionForm" parent={this} />;
    }

    var splashPageContents =
    <div className="splashElements">
          <span id="guest-login-box">
            <div id="guest-login-button" onClick={this.loginGuest} >Guest Login</div>
          </span>
          <div id="home-logo-box">
            <img id="home-logo" src="/assets/LogoPNGnoWatermark.png" />
          </div>
          <span id="initialSignUp">
            <div id="pre-drop-text">I am a...</div>
            <select onChange={this.titleChange}>
              <option value="CEO">CEO</option>
              <option value="CFO">CFO</option>
              <option value="MBA">MBA</option>
              <option value="Developer">Developer</option>
            </select>
            <div onClick={this.openModal} id='sign-up-box'>
              <div id="sign-up-button">Browse Matches</div>
            </div>
          </span>
    </div>;

    if (this.state.errors.length > 0) {
      var errorMessages = <Errors errors={this.state.errors}/>;
    }

    return (
      <div className="splash_page">
        {splashPageContents}
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

module.exports = SplashPage;
