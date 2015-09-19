import React from "react";
import LanguageTable from '../step-components/LanguageTable.js'

var StepThree = React.createClass({
    handleLanguageSelect: function(language) {
        return;
    },
    handleStepChange: function(event) {
        var nextCompState = this.props.compState;
        if (this.props.teachSelected) {
            nextCompState += 1;
        }
        else {
            nextCompState += 2;
        }
        this.props.handleStepChange(nextCompState);
    },
    render : function(){
        var prompt;
        var numberLanguages = this.props.languages.length;
        console.log(this.props.languages.length);
        return(
          <div>
            <h4>Which language(s) do you want to learn?</h4>
            <LanguageTable numberLanguages={numberLanguages}
                languages={this.props.languages}
                handleLanguageSelect={this.props.handleLanguageSelect} />
            <input type='submit' value='Submit' onClick={this.handleStepChange}/>
          </div>
        );
    }
})

export default StepThree;
