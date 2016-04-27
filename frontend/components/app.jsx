var React = require('react'),
    SplashPage = require('./splashPage'),
    NavBar = require('./navBar');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>OkCoFounder React</h1></header>
        <NavBar/>
        <SplashPage/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
