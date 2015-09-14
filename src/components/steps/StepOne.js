import React from "react";

var StepOne = React.createClass({
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

    render : function(){
        return(
          <div>
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
          </div>
        );
    }
})

export default StepOne;
