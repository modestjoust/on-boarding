import React from "react";
import FormWrapper from '../step-components/FormWrapper'
import NextPrevButtons from '../navigator-components/NextPrevButtons'

var StepOne = React.createClass({
  render() {
    return (
      <div>
        <FormWrapper ref='formWrapper'
          username={this.props.username}
          password={this.props.password}
          confirm={this.props.confirm} />
        <NextPrevButtons handleStepChange={this.handleStepChange} />
      </div>
    );
  },
  handleStepChange(movingForward) {
    if (movingForward) {
      if (this.refs.formWrapper.state.goodUsername &&
          this.refs.formWrapper.state.goodPassword &&
          this.refs.formWrapper.state.passwordsMatch) {

        //var username = document.getElementById('usernameField').value;
        var username = this.refs.formWrapper.refs.usernameInput.refs.formBox.value;
        //var password = document.getElementById('passwordField').value;
        var password = this.refs.formWrapper.refs.passwordInput.refs.formBox.value;
        //var confirm = document.getElementById('confirmField').value;
        var confirm = this.refs.formWrapper.refs.confirmInput.refs.formBox.value;

        this.props.actions.updateCredentials(username, password, confirm)
        this.props.actions.changeStep(this.props.step + 1)
      }
    }
    else {
      console.log('no step previous')
      return
    }
  }
})

export default StepOne;
