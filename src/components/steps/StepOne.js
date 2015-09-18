import React from "react";

var StepOne = React.createClass({
    getInitialState: function() {
        return {goodUsername: undefined,
                goodPassword: undefined,
                passwordsMatch: undefined
      };
    },

    handleUsernameChange: function() {
        var newValue = event.target.value;
        this.props.usernameChange(newValue);
    },

    handlePasswordChange: function() {
        var newValue = event.target.value;
        this.props.passwordChange(newValue);
    },

    handleConfirmChange: function() {
        var newValue = event.target.value;
        this.props.confirmChange(newValue);
    },

    validateUsername: function(event) {
        var test = /^\w+$/;

        if (this.props.username.length >= 4 &&
            this.props.username.length <= 16 &&
            test.test(this.props.username)) {
                //
                //Todo: Check availability
                ////
                this.setState({goodUsername: true})
                console.log('good username');
        }
        else {
                console.log('bad username');
                this.setState({goodUsername: false})
        }

        return;
    },

    validatePassword: function(event) {
        var test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;

        if (this.props.password.length >= 4 &&
            this.props.password.length <= 16 &&
            test.test(this.props.password)) {

              console.log('good');
              this.setState({goodPassword: true})
        }
        else {
              console.log('not good');
              this.setState({goodPassword: false})
        }

        return;
    },

    confirmPassword: function(event) {
        if (this.state.goodPassword && this.props.password === this.props.confirm) {
            console.log('passwords match')
            this.setState({passwordsMatch: true})
        }
        else {
          console.log('passwords do not match')
          this.setState({passwordsMatch: false})
        }
        return;
    },

    clearUsernameMessage: function(event) {
        this.setState({goodUsername: undefined});
    },

    clearPasswordMessage: function(event) {
        this.setState({goodPassword: undefined});
    },

    clearConfirmMessage: function(event) {
        this.setState({passwordsMatch: undefined});
    },

    render : function(){
        let usernameMessage, passwordMessage, confirmMessage;

        if (this.state.goodUsername) {
          usernameMessage = <div>Username is available!</div>
        }
        if (this.state.goodUsername === false) {
          usernameMessage = <div>Invalid username.</div>
        }

        if (this.state.goodPassword) {
          passwordMessage = <div>Looks good!</div>
        }
        if (this.state.goodPassword === false) {
          passwordMessage = <div>Invalid password.</div>
        }

        if (this.state.passwordsMatch) {
          confirmMessage = <div>They match!</div>
        }
        if (this.state.passwordsMatch === false) {
          confirmMessage = <div>No match.</div>
        }

        return(
          <div>
            <form>

            <h4>Username</h4>
            <input type='text' defaultValue='' placeholder='Username'
                onChange={this.handleUsernameChange}
                onBlur={this.validateUsername}
                onFocus={this.clearUsernameMessage}/>
            {usernameMessage}


            <h4>Password:</h4>
            <input type='password' defaultValue='' placeholder='Password'
                onChange={this.handlePasswordChange}
                onBlur={this.validatePassword}
                onFocus={this.clearPasswordMessage}/>
            {passwordMessage}

            <h4>Confirm password:</h4>
            <input type='password' defaultValue='' placeholder='Confirm Password'
                onChange={this.handleConfirmChange}
                onBlur={this.confirmPassword}
                onFocus={this.clearConfirmMessage}/>
            {confirmMessage}

            </form>

            <p>Username: {this.props.username}</p>
            <p>Password: {this.props.password}</p>
            <p>Confirm: {this.props.confirm}</p>
          </div>
        );
    }
})

export default StepOne;
