import React from 'react'

var PasswordInput = React.createClass({
  render() {
    return(
      <input type='password' id='passwordField' ref='formBox' defaultValue={this.props.password} placeholder='Password'
          onBlur={this.validatePassword}
          onFocus={this.props.clearPasswordMessage} />
    )
  },
  validatePassword: function(event) {
      var test = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}$/;
      var newPassword = event.target.value
      if (newPassword.length >= 4 &&
          newPassword.length <= 16 &&
          test.test(newPassword)) {

            console.log('good');
            this.props.setGoodPassword(true)
      }
      else {
            console.log('not good');
            this.props.setGoodPassword(false)
      }

      return;
  }
})

export default PasswordInput
