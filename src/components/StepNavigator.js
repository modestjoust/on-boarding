import React from 'react'
import StepButton from './navigator-components/StepButton'

var StepNavigator = React.createClass({
    render() {
      console.log('availableSteps = ' + this.props.availableSteps)
      var stepButtons = this.props.availableSteps.map( (step, i) => {
        return <StepButton key={i} id={step}
          handleStepChange={this.props.handleStepChange}
          actions={this.props.actions}
        />
      })
      console.log(stepButtons)
      return (
        <div>
          {stepButtons}
        </div>
      )
    },
    handleStepChange(id) {
      this.props.handleStepChange(id)
    }
});

export default StepNavigator
