import React from "react";
import ButtonOfIntent from '../step-components/ButtonOfIntent.js';

var StepTwo = React.createClass({
    handleIntentSelect: function(intent) {
        this.props.handleIntentSelect(intent)
    },
    handleStepChange: function(event) {
        var nextCompState = this.props.compState;
        if (event.target.id === 'nextButton') {
            if (this.props.learnSelected)
                nextCompState += 1;
            else {
                if (this.props.teachSelected)
                    nextCompState += 2;
                else {
                    //error: must make at least one selection
                }
            }
        }
        if (event.target.id === 'backButton') {
            nextCompState -= 1;
        }
        this.props.handleStepChange(nextCompState);
    },
    render : function(){
        return(
          <div>
            <ButtonOfIntent title={'learn'} isSelected={this.props.learnSelected} handleClick={this.handleIntentSelect}/>
            <ButtonOfIntent title={'teach'} isSelected={this.props.teachSelected} handleClick={this.handleIntentSelect}/>
            <input type='submit' value='Previous' id='backButton' onClick={this.handleStepChange}/>
            <input type='submit' value='Next' id='nextButton' onClick={this.handleStepChange}/>
          </div>
        );
    }
})

export default StepTwo;
