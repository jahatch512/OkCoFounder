var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions');

var UserIndexItem = React.createClass({

  render: function() {

    return (
      <div className="user_index_item">
        <ul className="user_item_list">
          <li>"Username " {this.props.user.username}</li>
          <li>"Title " {this.props.user.title}</li>
          <li>"Age " {this.props.user.age}</li>
          <li>"Zipcode " {this.props.user.zipcode}</li>

        </ul>
      </div>
    );
  }

});

module.exports = UserIndexItem;
