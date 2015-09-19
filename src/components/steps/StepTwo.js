import React from "react";
import ButtonOfIntent from '../step-components/ButtonOfIntent.js';

var StepTwo = React.createClass({
    handleIntentSelect: function(intent) {
        this.props.handleIntentSelect(intent)
    },
    handleStepChange: function(event) {
        var nextCompState = this.props.compState;
        if (this.props.learnSelected)
            nextCompState += 1;
        else {
            if (this.props.teachSelected)
                nextCompState += 2;
            else {
                //error: must make at least one selection
            }
        }
        this.props.handleStepChange(nextCompState);
    },
    render : function(){
        return(
          <div>
            <ButtonOfIntent title={'learn'} isSelected={this.props.learnSelected} handleClick={this.handleIntentSelect}/>
            <ButtonOfIntent title={'teach'} isSelected={this.props.teachSelected} handleClick={this.handleIntentSelect}/>
            <input type='submit' value='Submit' onClick={this.handleStepChange}/>
          </div>
        );
    }
})

export default StepTwo;
