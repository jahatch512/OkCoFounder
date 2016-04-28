var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions');

var UserIndexItem = React.createClass({

  render: function() {

    return (
      <div className="user_index_item">
        <div className="user_item_list">
          <div>"Username " {this.props.user.username}</div>
          <div>"Title " {this.props.user.title}</div>
          <div>"Age " {this.props.user.age}</div>
          <div>"Zipcode " {this.props.user.zipcode}</div>

        </div>
      </div>
    );
  }

});

module.exports = UserIndexItem;
