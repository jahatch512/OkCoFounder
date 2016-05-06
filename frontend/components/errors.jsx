var React = require("react");
var ReactDOM = require("react-dom");
var HashHistory = require('react-router').hashHistory;


var Errors = React.createClass({

  componentWillReceiveProps: function(newProps){
  },

  shouldComponentUpdate: function(){
    return true;
  },

  render: function() {
    // console.log(this.props.errors);

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
      <ul className="error-list">
        {errorsList}
      </ul>
    );
  }
});

module.exports = Errors;
