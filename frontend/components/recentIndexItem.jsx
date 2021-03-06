var React = require('react'),
    ReactDOM = require('react-dom'),
    SessionStore = require('../stores/sessionStore'),
    UserStore = require('../stores/userStore'),
    ClientActions = require('../actions/ClientActions'),
    hashHistory = require('react-router').hashHistory;


var RecentIndexItem = React.createClass({
  handleClick: function(event) {
    event.preventDefault();
    hashHistory.push('/users/' + this.props.user.id);
  },

  render: function() {
    return (
      <div className="recent_index_item"
           onClick={this.handleClick}>
           <div id="small-picture-box">
             <img className="small-picture" src={this.props.user.image_url}
                  alt="Profile Picture" />
           </div>

           <div id="thumbnail-user-info">
             <div id="index-username">{this.props.user.username}</div>
             <div className="basic-info">{this.props.user.title} - {this.props.user.age}</div>
           </div>
      </div>
    );
  }

});

module.exports = RecentIndexItem;
