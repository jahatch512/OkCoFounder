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
      title: this.props.title,
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
    // this.props.parent.closeModal();
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

            <br/>
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
              id="previous_exp"/>
          <br/>

          <input type="submit" value="Create Profile"/>

        </form>

      </div>
    );
  }
});


module.exports = SignUp;
