import React from "react";
import LanguageTable from '../step-components/LanguageTable.js'

var StepThree = React.createClass({
    getInitialState: function() {
        return {
            learning: true
        }
    },
    handleLanguageSelect: function(language) {
        var language = language
        this.props.handleLanguageSelect(language, this.state.learning)
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
        //console.log(this.props.languages.length);
        return(
          <div>
            <h4>Which language(s) do you want to learn?</h4>
            <LanguageTable numberLanguages={numberLanguages}
                languages={this.props.languages}
                handleLanguageSelect={this.handleLanguageSelect}
                learning={this.state.learning} />
            <input type='submit' value='Submit' onClick={this.handleStepChange}/>
          </div>
        );
    }
})

export default StepThree;
