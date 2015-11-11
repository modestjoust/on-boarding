import React from "react";
import LanguageTable from '../step-components/LanguageTable.js'

var StepThree = React.createClass({
    getInitialState: function() {
        return {
            learning: true,
            //array of all languages from server,
            languages: ['English', 'Czech', 'Spanish', 'Mandarin', 'Slovenian',
                        'Latin', 'French', 'Russian', 'Sign Language', 'German',
                        'Croatian', 'Serbian', 'Slovak', 'Norwegian', 'Italian'],
        }
    },
    handleLanguageSelect: function(languageKey) {
        var languageKey = languageKey
        var language = this.state.languages[languageKey]
        this.props.handleLanguageSelect(language, this.state.learning)
    },
    handleStepChange: function(event) {
        var nextCompState = this.props.compState;
        if (event.target.id === 'nextButton') {
            if (this.props.teachSelected) {
                nextCompState += 1;
            }
            else {
                nextCompState += 2;
            }
        }
        if (event.target.id === 'backButton') {
            nextCompState -= 1;
        }
        this.props.handleStepChange(nextCompState);
    },
    render : function(){
        //var prompt;
        var numberLanguages = this.state.languages.length;
        return(
            <div>
                <h4>Which language(s) do you want to learn?</h4>
                <LanguageTable numberLanguages={numberLanguages}
                    languages={this.state.languages}
                    willLearn={this.props.willLearn}
                    handleLanguageSelect={this.handleLanguageSelect}
                    learning={this.state.learning} />
                <input type='submit' value='Previous' id='backButton' onClick={this.handleStepChange}/>
                <input type='submit' value='Next' id='nextButton' onClick={this.handleStepChange}/>
            </div>
        );
    }
})

export default StepThree;
