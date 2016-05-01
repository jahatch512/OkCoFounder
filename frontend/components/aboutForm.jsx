var React = require('react'),
    ReactDOM = require('react-dom'),
    UserStore = require('../stores/userStore'),
    SessionStore = require('../stores/sessionStore'),
    ClientActions = require('../actions/ClientActions'),
    ModalStyling = require('../constants/modalConstants'),
    Modal = require('react-modal'),
    hashHistory = require('react-router').hashHistory;

var AboutForm = React.createClass({
  getInitialState: function() {
    return {
      modalIsOpen: true,
      summary: "",
      current_work: "",
      previous_experience: "",
      user_id: SessionStore.currentUser().id
    };
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  afterOpenModal: function() {
    ModalStyling.content.opacity = 100;
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  handleSubmit: function(event){
    event.preventDefault();
    this.closeModal();
    var about = {about: {
      summary: this.state.summary,
      current_work: this.state.current_work,
      previous_experience: this.state.previous_experience,
      user_id: this.state.user_id
    }};
    ClientActions.createAbout(about);
  },

  render: function() {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          style={ModalStyling}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal} >

          <form className='login-form' onSubmit={this.handleSubmit}>

            <input type="text"
              className="form-textbox"
              value={this.state.summary}
              onChange={this.onChange}
              placeholder="Brief Introduction"
              id="summary"/>
            <br/>

            <br/>
            <input type="text"
              className="form-textbox"
              value={this.state.current_work}
              onChange={this.onChange}
              placeholder="Current Work"
              id="current_work"/>
            <br/>

            <br/>
            <input type="text"
              className="form-textbox"
              value={this.state.previous_exp}
              onChange={this.onChange}
              placeholder="Previous Experience"
              id="previous_experience"/>
            <br/>

            <input type="submit" value="Update Profile"/>

          </form>
        </Modal>
      </div>
    );
  }

});


module.exports = AboutForm;
