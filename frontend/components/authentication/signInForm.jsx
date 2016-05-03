
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

  render: function() {
    return (
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
    );
  }
});

module.exports = SignIn;
