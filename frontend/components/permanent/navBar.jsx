var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../../stores/sessionStore'),
    SignIn = require('../authentication/signInForm'),
    ModalStyling = require('../../constants/modalConstants'),
    Modal = require('react-modal'),
    ClientActions = require('../../actions/ClientActions');


var navBar = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: false,
      logInClicked: false,
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
    if (this.state.logInClicked === true) {
      modalContents = <SignIn ref="sessionForm" parent={this} />;
    }

    if (this.state.currentUser !== null) {
      var navBarSessionButton =

      <ul>
        <li className="navbar_buttons">
          <button onClick={this.logoutUser} id='logoutClicked'>Logout</button>
        </li>
      </ul>;
    } else {
      navBarSessionButton =
      <div
        onClick={this.openModal}
        id="logInClicked">
          Sign In
      </div>
      ;
    }

    return (
    <div className="navBar">
      <div id="nav-logo">OkCoFounderLogo</div>
        <div className="nav-session-buttons">{navBarSessionButton}</div>
      <Modal
        isOpen={this.state.modalIsOpen}
        style={ModalStyling.CONTENT_STYLE}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal} >

        <button onClick={this.closeModal}>close</button>
        {modalContents}
      </Modal>
    </div>
    );
  }

});

module.exports = navBar;
