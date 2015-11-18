import React from 'react'

var UsernameInput = React.createClass({
  render() {
    return(
      <input type='text' id='usernameField' ref='formBox' defaultValue={this.props.username} placeholder='Username'
          onBlur={this.validateUsername}
          onFocus={this.props.clearUsernameMessage}/>
    )
  },
  validateUsername: function(event) {
      var test = /^\w+$/
      var newUsername = event.target.value
      if (newUsername.length >= 4 &&
          newUsername.length <= 16 &&
          test.test(newUsername)) {
              ////
              //Todo: Check availability
              ////

              //this.setState({goodUsername: true})
              this.props.setGoodUsername(true)
              console.log('good username')
      }
      else {
              this.props.setGoodUsername(false)
              console.log('bad username')
              //this.setState({goodUsername: false})
      }

      return;
  }
})

export default UsernameInput
