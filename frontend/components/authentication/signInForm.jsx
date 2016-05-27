
var React = require('react');
var ClientActions = require('../../actions/ClientActions.js');

var SignIn = React.createClass({
  getInitialState: function() {
    return {username: "", password: ""};
  },

  handleSubmit: function(event) {
    event.preventDefault();
    var user = {user: {
      username: this.state.username,
      password: this.state.password
    }};
    ClientActions.loginUser(user);
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  loginGuest: function() {
    var user = {user: {
      username: "AwesomePerson",
      password: "password"
    }};
    ClientActions.loginUser(user);
  },

  render: function() {
    return (
      <div className='login-form'>
        <form className='login-form' onSubmit={this.handleSubmit}>


            <br/>
            <input type="text"
                   className="form-textbox"
                   value={this.state.username}
                   onChange={this.onChange}
                   placeholder="Username"
                   id="username" />

          <br/>


            <br/>
            <input type="password"
                   className="form-textbox"
                   value={this.state.password}
                   onChange={this.onChange}
                   placeholder="Password"
                   id="password"/>

          <br/>

          <input className="login-button" type="submit" value="Sign In!"/>
        </form>

        <button className="login-button"
          id="guest"
          onClick={this.loginGuest}>Login as Guest </button>
      </div>
    );
  }
});

module.exports = SignIn;
