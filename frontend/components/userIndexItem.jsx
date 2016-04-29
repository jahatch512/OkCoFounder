var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;


var UserIndexItem = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    hashHistory.push('/users/' + this.props.user.id);
  },

  render: function() {

    return (
      <div className="user_index_item"
           onClick={this.handleClick}>
        <img src={this.props.user.image_url}
             width= "200"
             height= "300"
             alt="Profile Picture" />
          <div>Username: {this.props.user.username}</div>
          <div className="basic_info">{this.props.user.title} - {this.props.user.age} - {this.props.user.zipcode}
          </div>
      </div>
    );
  }

});

module.exports = UserIndexItem;
