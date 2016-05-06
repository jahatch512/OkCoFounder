var React = require('react'),
    SplashPage = require('../splashPage'),
    NavBar = require('./navBar'),
    Footer = require('./footer');

var App = React.createClass({
  render: function(){
    return (
      <div className="app">
        <NavBar/>
        {this.props.children}

      </div>
    );
  }
});

module.exports = App;
