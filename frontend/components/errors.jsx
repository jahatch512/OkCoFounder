var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;


var Errors = React.createClass({

  componentWillReceiveProps: function(newProps){
    debugger
  },

  shouldComponentUpdate: function(){
    return true;
  },

  render: function() {
    debugger
    if (typeof this.props.errors === "string"){
      var errorsList = this.props.errors;
    } else {
      var key = 0;

      errorsList = this.props.errors.map(function(error) {
        key += 1;
        return <li key={key}>{error}</li>;
      });
    }

    console.log(errorsList);


    return (
      <ul className="error-list">
        {errorsList}
      </ul>
    );
  }
});

module.exports = Errors;
