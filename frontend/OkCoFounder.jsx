var React = require('react'),
    ReactDOM = require('react-dom'),
    Modal = require('react-modal');
//Router
var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = require('react-router').hashHistory;
//Components
var App = require('./components/permanent/app'),
    SessionStore = require('./stores/sessionStore'),
    UsersIndex = require('./components/usersIndex'),
    SplashPage = require('./components/splashPage'),
    UserPage = require('./components/userPage');

//Mixins
// var CurrentUserState = require('./mixins/current_user_state');


var RouterComponent = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SplashPage}/>
      <Route path="users" component={UsersIndex} />
      <Route path="users/:userId" component={UserPage} />

    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded', function(){
  Modal.setAppElement('#root');
  var root = document.getElementById('root');
  ReactDOM.render(RouterComponent, root);
});
