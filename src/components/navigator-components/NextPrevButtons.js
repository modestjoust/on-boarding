import React from 'react'

var NextPrevButtons = React.createClass({
  render() {
    return (
      <div>
        <input type='submit' value='Previous' id='backButton' onClick={this.handleStepChange} />
        <input type='submit' value='Next' id='nextButton' onClick={this.handleStepChange} />
      </div>
    )
  },
  handleStepChange(event) {
    if (event.target.id === 'nextButton') {
      this.props.handleStepChange(1)
    }
    else {
      this.props.handleStepChange(0)
    }
  }
})

export default NextPrevButtons
