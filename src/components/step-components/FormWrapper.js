import React from 'react'
import UsernameInput from './UsernameInput'
import PasswordInput from './PasswordInput'
import ConfirmInput from './ConfirmInput'

var FormWrapper = React.createClass({
  render() {
    //let usernameMessage, passwordMessage, confirmMessage;
    let alerts = this.getAlerts()
    console.log(alerts)

    return (
      <form>
        <UsernameInput ref='usernameInput'
          username={this.props.username}
          clearUsernameMessage={this.clearUsernameMessage}
          setGoodUsername={this.setGoodUsername} />
        {alerts.username}
        <PasswordInput ref='passwordInput'
          password={this.props.password}
          clearPasswordMessage={this.clearPasswordMessage}
          setGoodPassword={this.setGoodPassword}/>
        {alerts.password}
        <ConfirmInput ref='confirmInput'
          confirm={this.props.confirm}
          clearConfirmMessage={this.clearConfirmMessage}
          setPasswordsMatch={this.setPasswordsMatch}
          goodPassword={this.state.goodPassword}/>
        {alerts.confirm}
      </form>
    )
  },
  getInitialState: function() {
       //Probably not the best way to do this, but assuming the only way that
       //the user can get to step 2 is with all fields valid, then when returning
       //to step 1, if username is populated, then all fields were valid
       //and we can set the initial state (valid fields) to all true. Otherwise
       //it is the user's first visit to step 1
       if (this.props.username.length > 0) {
           return {
            //  username: this.props.username,
            //  password: this.props.password,
            //  confirm: this.props.confirm,
             goodUsername: true,
             goodPassword: true,
             passwordsMatch: true
            //  alerts: {
            //    username: '',
            //    password: '',
            //    confirm: ''
            //  }
           };
       } else {
           return {
            //  username: this.props.username,
            //  password: this.props.password,
            //  confirm: this.props.confirm,
             goodUsername: undefined,
             goodPassword: undefined,
             passwordsMatch: undefined
            //  alerts: {
            //    username: '',
            //    password: '',
            //    confirm: ''
            //  }
           };
       }
   },
   getAlerts() {
     let alerts = {username: <div></div>, password: <div></div>, confirm: undefined}
     console.log('getting alerts')
     if (this.state.goodUsername) {
       //this.setState({alerts: {username: <div>Username is available!</div>}})
       alerts.username = <div>Username is available!</div>
     }
     if (this.state.goodUsername === false) {
       alerts.username = <div>Invalid username.</div>
     }

     if (this.state.goodPassword) {
       alerts.password = <div>Looks good!</div>
     }
     if (this.state.goodPassword === false) {
       alerts.password = <div>Invalid password.</div>
     }

     if (this.state.passwordsMatch) {
       alerts.confirm = <div>They match!</div>
     }
     if (this.state.passwordsMatch === false) {
       alerts.confirm = <div>No match.</div>
     }
     return alerts;
   },
   setGoodUsername: function(isGood) {
     console.log('setting username validity = ' + isGood )
     this.setState({goodUsername: isGood})
   },
   setGoodPassword: function(isGood) {
     console.log('setting password validity = ' + isGood )
     this.setState({goodPassword: isGood})
   },
   setPasswordsMatch: function(isGood) {
     console.log('setting confirm validity = ' + isGood )
     this.setState({passwordsMatch: isGood})
   },
   clearUsernameMessage: function() {
     console.log('clearing')
       this.setState({goodUsername: undefined});
   },
   clearPasswordMessage: function() {
     console.log('clearing')
       this.setState({goodPassword: undefined});
   },
   clearConfirmMessage: function() {
     console.log('clearing')
       this.setState({passwordsMatch: undefined});
   }
})

export default FormWrapper
