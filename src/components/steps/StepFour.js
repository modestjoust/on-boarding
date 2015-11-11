import React from "react";
import LanguageTable from '../step-components/LanguageTable.js';

var StepFour = React.createClass({
    getInitialState: function() {
        return {
            learning: false,
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
            nextCompState += 1;
        }
        else {
            if (this.props.learnSelected) {
                nextCompState -= 1;
            }
            else {
                nextCompState -= 2;
            }
        }
        this.props.handleStepChange(nextCompState);
    },
    render : function(){
        //var prompt;
        var numberLanguages = this.state.languages.length;
        return(
            <div>
                <h4>Which language(s) do you want to teach?</h4>
                <LanguageTable numberLanguages={numberLanguages}
                    languages={this.state.languages}
                    willTeach={this.props.willTeach}
                    handleLanguageSelect={this.handleLanguageSelect}
                    learning={this.state.learning} />
                <input type='submit' value='Previous' id='backButton' onClick={this.handleStepChange}/>
                <input type='submit' value='Next' id='nextButton' onClick={this.handleStepChange}/>
            </div>
        );
    }
})

export default StepFour;
