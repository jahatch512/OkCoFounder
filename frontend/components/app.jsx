var React = require('react'),
    NavBar = require('./navBar');

var App = React.createClass({
  render: function(){
    return (
      <div>
        <header><h1>OkCoFounder React</h1></header>
        <NavBar/>
        {this.props.children}
      </div>
    );
  }
});

module.exports = App;
