import React from "react";
import LanguageTable from '../step-components/LanguageTable.js';

var StepFour = React.createClass({
    handleStepChange: function(event) {
        var nextCompState = this.props.compState + 1;
        this.props.handleStepChange(nextCompState);
    },
    render : function(){

        var numberLanguages = this.props.languages.length;

        return(
          <div>
              <h4>Which language(s) do you want to teach?</h4>
              <LanguageTable numberLanguages={numberLanguages}
                  languages={this.props.languages}
                  handleLanguageSelect={this.props.handleLanguageSelect} />
              <input type='submit' value='Submit' onClick={this.handleStepChange}/>
          </div>
        );
    }
})

export default StepFour;
