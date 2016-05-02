var UserApi = require('../util/userApi'),
    Dispatcher = require('../dispatcher/dispatcher'),
    ConnectionConstants = require('../constants/connectionConstants');


module.exports = {
  createConnection: function (connection) {
    UserApi.createConnection(connection, this.receiveConnection);
   },

  deleteConnection: function (connection) {
    UserApi.deleteConnection(connection);
  },

receiveConnection: function (connection) {
  Dispatcher.dispatch({
    actionType: ConnectionConstants.RECEIVE_CONNECTION,
    connection: connection
  });
}


};
