import React from "react"
import ButtonOfIntent from '../step-components/ButtonOfIntent.js'
import NextPrevButtons from '../navigator-components/NextPrevButtons'

var StepTwo = React.createClass({
  render() {
    return(
      <div>
        <ButtonOfIntent title={'learn'} isSelected={this.props.learnSelected} handleClick={this.handleIntentSelect}/>
        <ButtonOfIntent title={'teach'} isSelected={this.props.teachSelected} handleClick={this.handleIntentSelect}/>
        <NextPrevButtons handleStepChange={this.handleStepChange}/>
      </div>
    )
  },
  handleStepChange(movingForward) {
    if (movingForward) {
      this.props.handleStepChange(this.props.step + 1)
    }
    else {
      this.props.handleStepChange(this.props.step - 1)
    }
  },
  handleIntentSelect(intent) {
    console.log(intent)
    this.props.actions.updateIntent(intent)
    intent === 'learn' ?
      this.props.toggleStepAvailable(3) : this.props.toggleStepAvailable(4)
  }
})

export default StepTwo;
