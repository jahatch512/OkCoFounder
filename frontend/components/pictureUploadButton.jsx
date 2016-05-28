var React = require('react'),
    ReactDOM = require('react-dom'),
    ClientActions = require('../actions/ClientActions');

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        var imageUrl = results[0].url;
        ClientActions.updateUser({user: {image_url: imageUrl}}, this.props.user.id);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div className="picture-upload-button">
        <div onClick={this.upload} id="picture-text">Change Profile Picture</div>
      </div>
    );
  }
});

module.exports = UploadButton;
