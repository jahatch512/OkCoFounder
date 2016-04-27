var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require('react-modal');
//Router
var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;
//Components
var App = require('./components/app'),
    SessionStore = require('./stores/sessionStore'),
    SignUp = require('./components/authentication/signUp'),
    SignIn = require('./components/authentication/signIn');

//Mixins
// var CurrentUserState = require('./mixins/current_user_state');


var RouterComponent = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

window.sessionUtil = require('./util/sessionApi');
window.userUtil = require('./util/userApi');

document.addEventListener('DOMContentLoaded', function(){
  Modal.setAppElement('#root');
  var root = document.getElementById('root');
  ReactDOM.render(RouterComponent, root);
});
