import React from 'react'
import StepButton from './navigator-components/StepButton'

var StepNavigator = React.createClass({
    render() {
      let stepButtons = []
      for (var i = 1; i < 7; i++) {
        stepButtons.push(
          <StepButton key={i} id={i} actions={this.props.actions}/>
        )
      }
        return (
            <div>
                {stepButtons}
            </div>
        )
    },
    handleClick(e) {
        console.log('clicky ' + e.target.id)
        this.props.changeStep(e.target.id)
    }
});

export default StepNavigator
