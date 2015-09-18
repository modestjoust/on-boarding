import React from "react";
import StepOne from './steps/StepOne.js';
import StepTwo from './steps/StepTwo.js';
import StepThree from './steps/StepThree.js';
import StepFour from './steps/StepFour.js';

var RegistrationForm = React.createClass({
    getInitialState: function() {
        return {compState: 0,
                username: '',
                password: '',
                confirm: ''
              };
    },

    componentWillMount: function() {
      this.setState({steps : [
          {name: 'StepOne',
            component: <StepOne
            username={this.state.username}
            usernameChange={this.handleUsernameChange}
            password={this.state.password}
            passwordChange={this.handlePasswordChange}
            confirm={this.state.confirm}
            confirmChange={this.handleConfirmChange}
            />},
          {name: 'StepTwo', component: <StepTwo/>},
          {name: 'StepThree', component: <StepThree/>},
          {name: 'StepFour', component: <StepFour/>}
        ]})
    },

    handleUsernameChange: function(newValue) {
        console.log(newValue);
        this.setState({username: newValue});
    },

    handlePasswordChange: function(newValue) {
        console.log(newValue);
        this.setState({password: newValue});
    },

    handleConfirmChange: function(newValue) {
        console.log(newValue);
        this.setState({confirm: newValue});
    },

    handleKeyDown: function(evt) {
        if(evt.which === 13) {
          this.state.compState++;
        }
    },

    handleClick: function(event) {
        //console.log(this.state.compState);
        this.setState({compState : this.state.compState+1});
        console.log(this.state.compState);
        console.log(this.children);
    },

    render : function(){

      switch (this.state.compState) {
        case 0:
          return(
            <div>
              <StepOne
              username={this.state.username}
              usernameChange={this.handleUsernameChange}
              password={this.state.password}
              passwordChange={this.handlePasswordChange}
              confirm={this.state.confirm}
              confirmChange={this.handleConfirmChange}
              />
              <input type='submit' value='Submit' onClick={this.handleClick}/>
            </div>
          );
          break;
        case 1:
          return(
            <div>
              <StepTwo/>
              <input type='submit' value='Submit' onClick={this.handleClick}/>
            </div>
          );
          break;
        case 2:
          return(
            <div>
              <StepThree/>
              <input type='submit' value='Submit' onClick={this.handleClick}/>
            </div>
          );
          break;
        case 3:
          return(
            <div>
              <StepFour/>
              <input type='submit' value='Submit' onClick={this.handleClick}/>
            </div>
          );
          break;
        }
      }
})

export default RegistrationForm;

//
//{this.state.steps[this.state.compState].component}
//

            /*
                getInitialState: function() {
                    return {username: '',
                            password: '',
                            confirm: ''
                  };
                },


                handleUsernameChange: function(event) {
                    this.setState({username: event.target.value});
                },
                handlePasswordChange: function(event) {
                    this.setState({password: event.target.value});
                },
                handleConfirmChange: function(event) {
                    this.setState({confirm: event.target.value});
                },
            */





/*
            <form>
            <label>Username</label>
            <input type='text' defaultValue='' placeholder='Username' onChange={this.handleUsernameChange}/>
            <label>Password:</label>
            <input type='password' defaultValue='' placeholder='Password' onChange={this.handlePasswordChange}/>
            <label>Confirm password:</label>
            <input type='password' defaultValue='' placeholder='Confirm Password' onChange={this.handleConfirmChange}/>
            </form>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
            <p>Confirm: {this.state.confirm}</p>
*/
