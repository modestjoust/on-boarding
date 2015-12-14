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
      this.props.handleStepChange(this.props.step + 1)
    }
  }
})

export default StepOne;
