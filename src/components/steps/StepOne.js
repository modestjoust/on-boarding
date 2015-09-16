import React from "react";

var StepOne = React.createClass({
    getInitialState: function() {
        return {username: '',
                password: '',
                confirm: '',
                usernameMessage: null,
                passwordMessage: null,
                confirmMessage: null,
                goodUsername: false,
                goodPassword: false
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
    validateUsername: function(event) {

        if (this.state.username.length >= 4 &&
            this.state.username.length <= 16) {
                var test = /^\w+$/;
                if (test.test(this.state.username)) {
                    console.log('match');
                    ////
                    //Todo: Check availability
                    ////
                    this.setState({usernameMessage: <div>This username is available!</div>})
                    this.setState({goodUsername: true})
                }
                else {
                    console.log('no match');
                    this.setState({usernameMessage: <div>Invalid username.</div>})
                    this.setState({goodUsername: false})
                }
        }
        else {
          console.log('bad string length');
          this.setState({usernameMessage: <div>Username must be between 4 and 16 characters in length.</div>})
          this.setState({goodUsername: false})
        }

        return;
    },
    validatePassword: function(event) {

        if (this.state.password.length >= 4 &&
            this.state.password.length <= 16) {
                var test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
                if (test.test(this.state.password)) {
                    console.log('good');
                    this.setState({passwordMessage: <div>Looks good!</div>,
                                    goodPassword: true})
                }
                else {
                    console.log('not good');
                    this.setState({passwordMessage: <div>Not good!</div>,
                                    goodPassword: false})
                }
        }
        else {
          console.log('bad password length');
          this.setState({passwordMessage: <div>Password must be between 8 and 16 characters in length.</div>,
                          goodPassword: false})
        }
        return;
    },

    confirmPassword: function(event) {
        if (this.state.goodPassword && this.state.password === this.state.confirm) {
            console.log('passwords match')
            this.setState({confirmMessage: <div>Its a match!</div>})
        }
        else {
          console.log('passwords do not match')
          this.setState({confirmMessage: <div>No match...</div>})
        }
        return;
    },

    render : function(){

        return(
          <div>
            <form>
            <h4>Username</h4>
            <input type='text' defaultValue='' placeholder='Username'
                onChange={this.handleUsernameChange}
                onBlur={this.validateUsername}/>
            {this.state.usernameMessage}

            <h4>Password:</h4>
            <input type='password' defaultValue='' placeholder='Password'
                onChange={this.handlePasswordChange}
                onBlur={this.validatePassword}/>
            {this.state.passwordMessage}

            <h4>Confirm password:</h4>
            <input type='password' defaultValue='' placeholder='Confirm Password'
                onChange={this.handleConfirmChange}
                onBlur={this.confirmPassword}/>
            {this.state.confirmMessage}
            </form>

            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
            <p>Confirm: {this.state.confirm}</p>
          </div>
        );
    }
})

export default StepOne;
