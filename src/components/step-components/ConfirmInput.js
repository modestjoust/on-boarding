import React from 'react'

var ConfirmInput = React.createClass({
  render() {
    return(
      <input type='password' id='confirmField' ref='formBox' defaultValue={this.props.confirm} placeholder='Confirm password'
          onBlur={this.confirmPassword}
          onFocus={this.props.clearConfirmMessage}/>
    )
  },
  confirmPassword: function(event) {
      var currentPassword = document.getElementById('passwordField').value
      console.log(currentPassword)
      var newConfirm = event.target.value
      if (this.props.goodPassword && currentPassword === newConfirm) {
        console.log('passwords match')
        //this.setState({passwordsMatch: true})
        this.props.setPasswordsMatch(true)
      }
      else {
        console.log('passwords do not match')
        //this.setState({passwordsMatch: false})
        this.props.setPasswordsMatch(false)
      }
      return;
  }
})

export default ConfirmInput
