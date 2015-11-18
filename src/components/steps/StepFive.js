import React from 'react'
import NextPrevButtons from '../navigator-components/NextPrevButtons'

var StepFive = React.createClass({
  render: function() {
    var learnList = this.props.willLearn.map(function(language) {
      return language += ' '
    })
    var teachList = this.props.willTeach.map(function(language) {
      return language += ' '
    })
    return (
      <div>
        <div>Verify details:</div>
        <p>Username: {this.props.username}</p>
        <p>Learning: {learnList}</p>
        <p>Teaching: {teachList}</p>
        <NextPrevButtons handleStepChange={this.handleStepChange}/>
      </div>
    )
  },
  handleStepChange(movingForward) {
    if (movingForward) {
      this.props.actions.changeStep(this.props.step + 1)
    }
    else {
      if (this.props.teachSelected) {
        this.props.actions.changeStep(this.props.step - 1)
      }
      else {
        this.props.actions.changeStep(this.props.step - 2)
      }
    }
  }
})

export default StepFive;
