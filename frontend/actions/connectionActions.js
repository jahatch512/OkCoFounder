var UserApi = require('../util/userApi'),
    Dispatcher = require('../dispatcher/dispatcher'),
    ConnectionConstants = require('../constants/connectionConstants');


module.exports = {
  createConnection: function (connection) {
    UserApi.createConnection(connection, this.receiveConnection);
   },

  deleteConnection: function (connection) {
    UserApi.deleteConnection(connection, this.removeConnection);
  },

  receiveConnection: function (connection) {
    Dispatcher.dispatch({
      actionType: ConnectionConstants.RECEIVE_CONNECTION,
      connection: connection
    });
  },

  removeConnection: function (connection) {
    Dispatcher.dispatch({
      actionType: ConnectionConstants.REMOVE_CONNECTION,
      connection: connection
    });
  }


};
