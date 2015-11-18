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
      if (this.props.learnSelected) {
        console.log('learnSelected')
        this.props.actions.changeStep(this.props.step + 1)
      } else if (this.props.teachSelected) {
        console.log('teachSelected')
        this.props.actions.changeStep(this.props.step + 2)
      } else {
        console.log('nothing selected')
        //print alert
      }
    }
    else {
      this.props.actions.changeStep(this.props.step - 1)
      return
    }
  },
  handleIntentSelect(intent) {
    console.log(intent)
    this.props.actions.updateIntent(intent)
  }
})

export default StepTwo;
