import React from "react/addons";
import RegistrationForm from "./RegistrationForm.js";
import StepNavigator from './StepNavigator.js'
var Router = require('react-router');

var { Route, RouteHandler, Link } = Router;

var Root = React.createClass({
    //mixins : [React.addons.PureRenderMixin],

    render : function(){
/*
        return <div>
            <Link to="registration-form">Continue to user registration.</Link>
            <RouteHandler/>
        </div>
*/
        return <div>
            <StepNavigator/>
            <RegistrationForm/>
            </div>
    }
});

export default Root;
