var React = require('react');
var ClientActions = require('../../actions/ClientActions.js');



var SignUp = React.createClass({
  getInitialState: function() {
    return {username: "",
            password: "",
            summary: "",
            current_work: "",
            previous_exp: "",
            title: "",
            age: "",
            zipcode: "",
          };
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var user = {user: {
      username: this.state.username,
      password: this.state.password,
      title: this.state.title,
      age: parseInt(this.state.age),
      zipcode: parseInt(this.state.zipcode)
    }};
    var about = {about: {
      summary: this.state.summary,
      current_work: this.state.current_work,
      previous_exp: this.state.previous_exp
    }};
    ClientActions.createUser(user);
    // ClientActions.createAbout(about);
    this.props.parent.closeModal();
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  render: function() {

    return (
      <div className='signupForm'>
        <form className='signup' onSubmit={this.handleSubmit}>

          <label className="formLabel">
            Username:
            <br/>
            <input type="text"
              value={this.state.username}
              onChange={this.onChange}
              id="username" />
          </label>
          <br/>

          <label className="formLabel">
            Password:
            <br/>
            <input type="password"
              value={this.state.password}
              onChange={this.onChange}
              id="password"/>
          </label>
          <br/>

          <label className="formLabel">
            Title:
            <br/>
            <input type="text"
              value={this.state.title}
              onChange={this.onChange}
              id="title" />
          </label>
          <br/>

          <label className="formLabel">
            Age:
            <br/>
            <input type="text"
              value={this.state.age}
              onChange={this.onChange}
              id="age" />
          </label>
          <br/>

          <label className="formLabel">
            Zipcode:
            <br/>
            <input type="text"
              value={this.state.zipcode}
              onChange={this.onChange}
              id="zipcode" />
          </label>
          <br/>

          <label className="formLabel">
            Summary:
            <br/>
            <input type="text"
              value={this.state.summary}
              onChange={this.onChange}
              id="summary"/>
          </label>
          <br/>

          <label className="formLabel">
            Current Work:
            <br/>
            <input type="text"
              value={this.state.current_work}
              onChange={this.onChange}
              id="current_work"/>
          </label>
          <br/>

          <label className="formLabel">
            Previous Experience:
            <br/>
            <input type="text"
              value={this.state.previous_exp}
              onChange={this.onChange}
              id="previous_exp"/>
          </label>
          <br/>

          <input type="submit" value="Create Profile"/>

        </form>

      </div>
    );
  }
});


module.exports = SignUp;
