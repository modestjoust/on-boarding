import React from "react";
import LanguageTable from '../step-components/LanguageTable.js'
import NextPrevButtons from '../navigator-components/NextPrevButtons'

var StepThree = React.createClass({
  render : function(){
    //var prompt;
    var numberLanguages = this.state.languages.length;
    return(
      <div>
        <h4>Which language(s) do you want to learn?</h4>
        <LanguageTable
          numberLanguages={numberLanguages}
          languages={this.state.languages}
          willLearn={this.props.willLearn}
          handleLanguageSelect={this.handleLanguageSelect}
          learning={this.state.learning} />
        <NextPrevButtons handleStepChange={this.handleStepChange}/>
      </div>
    );
  },
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
    this.state.learning ? this.props.actions.updateWillLearn(language) : this.props.actions.updateWillTeach(language)
  },
  handleStepChange(movingForward) {
    if (movingForward) {
      if (this.props.teachSelected) {
        this.props.actions.changeStep(this.props.step + 1)
      }
      else {
        this.props.actions.changeStep(this.props.step + 2)
      }
    }
    else {
      this.props.actions.changeStep(this.props.step - 1)
    }
  }
})

export default StepThree;
