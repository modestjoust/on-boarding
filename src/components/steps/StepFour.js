import React from "react"
import LanguageTable from '../step-components/LanguageTable.js'
import NextPrevButtons from '../navigator-components/NextPrevButtons'

var StepFour = React.createClass({
  render : function(){
    //var prompt;
    var numberLanguages = this.state.languages.length;
    return(
      <div>
        <h4>Which language(s) do you want to teach?</h4>
        <LanguageTable
          numberLanguages={numberLanguages}
          languages={this.state.languages}
          willTeach={this.props.willTeach}
          handleLanguageSelect={this.handleLanguageSelect}
          learning={this.state.learning} />
        <NextPrevButtons handleStepChange={this.handleStepChange}/>
      </div>
    );
  },
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
    this.state.learning ? this.props.actions.updateWillLearn(language) : this.props.actions.updateWillTeach(language)
  },
  handleStepChange(movingForward) {
    if (movingForward) {
      this.props.actions.changeStep(this.props.step + 1)
    }
    else {
      if (this.props.learnSelected) {
        this.props.actions.changeStep(this.props.step - 1)
      }
      else {
        this.props.actions.changeStep(this.props.step - 2)
      }
    }
  }
})

export default StepFour;
