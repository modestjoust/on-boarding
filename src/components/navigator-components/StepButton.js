import React from 'react'

var StepButton = React.createClass({
  handleClick() {
    this.props.handleStepChange(this.props.id)
  },
  render() {
    let stepNumber = this.props.id
    return (
      <button type="button" onClick={this.handleClick}>{stepNumber}</button>
    )
  }
})

export default StepButton;
