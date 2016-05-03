var React = require('react');
var ClientActions = require('../../actions/ClientActions.js');



var SignUp = React.createClass({
  getInitialState: function() {
    return {username: "",
            password: "",
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
      title: this.props.title,
      age: parseInt(this.state.age),
      zipcode: parseInt(this.state.zipcode)
    }};
    ClientActions.createUser(user);
  },

  onChange: function(event) {
    var state = {};
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  render: function() {

    return (
      <div className='signupForm'>
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

            <br/>
            <input type="text"
              className="form-textbox"
              value={this.state.age}
              onChange={this.onChange}
              placeholder="Age"
              id="age" />
          <br/>

            <br/>
            <input type="text"
              className="form-textbox"
              value={this.state.zipcode}
              onChange={this.onChange}
              placeholder="Zipcode"
              id="zipcode" />
          <br/>

          <input className="login-button" type="submit" value="Create Profile!"/>

        </form>

      </div>
    );
  }
});


module.exports = SignUp;
