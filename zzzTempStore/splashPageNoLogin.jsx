// var React = require('react'),
//     ReactDOM = require('react-dom'),
//     SignUp = require('./authentication/signUpForm'),
//     SessionStore = require('../stores/sessionStore'),
//     ModalStyling = require('../constants/modalConstants'),
//     ClientActions = require('../actions/ClientActions'),
//     Modal = require('react-modal');
//
// var SplashPage = React.createClass({
//   getInitialState: function() {
//     return {
//       modalIsOpen: false,
//       clickedSignUp: false,
//       currentUser: SessionStore.currentUser()
//     };
//   },
//
//   componentDidMount: function () {
//     this.sessionListener = SessionStore.addListener(this.onChange);
//   },
//
//   componentWillUnmount: function () {
//     this.sessionListener.remove();
//   },
//
//   onChange: function() {
//     this.setState({currentUser: SessionStore.currentUser()});
//   },
//
//   openModal: function(event) {
//     this.setState({modalIsOpen: true, clickedSignUp: true});
//   },
//
//   afterOpenModal: function() {
//     // this.refs.sessionForm.style.color = '#f00';
//   },
//
//   closeModal: function() {
//     this.setState({modalIsOpen: false, clickedSignUp: false});
//   },
//
//   render: function() {
//
//
//     if (this.state.clickedSignUp === true) {
//       var modalContents = <SignUp ref="sessionForm" parent={this} />;
//     } else {
//       modalContents = null;
//     }
//
//
//     if (this.state.currentUser !== null) {
//       var splashPageContents = "";
//     } else {
//       splashPageContents =
//       <ul>
//         <li className="splash_page_buttons">
//           <button onClick={this.openModal} id='clickedSignUp'>Sign Up</button>
//         </li>
//       </ul>;
//     }
//
//     var errors = SessionStore.allErrors();
//
//     if (errors.length > 0) {
//       var errorMessage = errors[0];
//     } else {
//       errorMessage = "";
//     }
//
//     return (
//       <ul className="splash_page">
//         {splashPageContents}
//         {errorMessage}
//         <Modal
//           isOpen={this.state.modalIsOpen}
//           style={ModalStyling.CONTENT_STYLE}
//           onAfterOpen={this.afterOpenModal}
//           onRequestClose={this.closeModal} >
//
//           <button onClick={this.closeModal}>close</button>
//           {modalContents}
//         </Modal>
//       </ul>
//     );
//   }
// });
//
// module.exports = SplashPage;
