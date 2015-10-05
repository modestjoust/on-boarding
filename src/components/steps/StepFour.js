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
            languagesSelected: [false, false, false, false, false,
                                false, false, false, false, false,
                                false, false, false, false, false]
        }
    },
    handleLanguageSelect: function(languageKey) {
        var languageKey = languageKey

        var update = React.addons.update;
        var languagesSelected = update(this.state.languagesSelected, {
            [languageKey]: {$set: !this.state.languagesSelected[languageKey]}
        });
        this.setState({languagesSelected: languagesSelected})
    },
    handleStepChange: function(event) {
        var nextCompState = this.props.compState + 1;
        this.props.handleStepChange(nextCompState);
    },
    render : function(){
        //var prompt;
        var numberLanguages = this.state.languages.length;
        //console.log(this.props.languages.length);
        return(
            <div>
                <h4>Which language(s) do you want to teach?</h4>
                <LanguageTable numberLanguages={numberLanguages}
                    languages={this.state.languages}
                    languagesSelected={this.state.languagesSelected}
                    handleLanguageSelect={this.handleLanguageSelect}
                    learning={this.state.learning} />
                <input type='submit' value='Submit' onClick={this.handleStepChange}/>
            </div>
        );
    }
})

export default StepFour;
