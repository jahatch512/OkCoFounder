var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;


var Errors = React.createClass({

  render: function() {
    if (typeof this.props.errors === "string"){
      var errorsList = this.props.errors;
    } else {
      var key = 0;
      errorsList = this.props.errors.map(function(error) {
        key += 1;
        return <li key={key}>{error}</li>;
      });
    }

    return (
      <ul>
        {errorsList}
      </ul>
    );
  }
});

module.exports = Errors;
