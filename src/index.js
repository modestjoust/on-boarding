require('./styles/styles.scss');
import React from 'react/addons';
import Root from './components/Root';
import RegistrationForm from './components/RegistrationForm';

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route handler={Root}>
    <Route name="registration-form" handler={RegistrationForm} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler){
    React.render(<Handler/>,  document.getElementById('main'));
});

// var appElement = React.createElement(Root, {name : initialName, items : initialItems});
// React.render(appElement, attachElement);
