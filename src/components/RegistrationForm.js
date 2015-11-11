import React from "react";
import StepOne from './steps/StepOne.js';
import StepTwo from './steps/StepTwo.js';
import StepThree from './steps/StepThree.js';
import StepFour from './steps/StepFour.js';
import StepFive from './steps/StepFive.js';
import StepSix from './steps/StepSix.js';

var RegistrationForm = React.createClass({
/*    getInitialState: function() {
        return {compState: 0,
                username: '',
                password: '',
                confirm: '',
                learnSelected: false,
                teachSelected: false,
                willTeach: [],
                willLearn: []
              };
    },
*/
    handleUsernameChange: function(newValue) {
        console.log(newValue);
        this.setState({username: newValue});
    },
    handlePasswordChange: function(newValue) {
        console.log(newValue);
        this.setState({password: newValue});
    },
    handleConfirmChange: function(newValue) {
        console.log(newValue);
        this.setState({confirm: newValue});
    },
    handleIntentSelect: function(intent) {
        if (intent === 'learn') {
            var learnSelected = this.state.learnSelected
            this.setState({learnSelected: !learnSelected})
        }
        else {
            var teachSelected = this.state.teachSelected
            this.setState({teachSelected: !teachSelected})
        }
    },
    handleLanguageSelect: function(language, learning) {
        var learning = learning
        var language = language
        var update = React.addons.update
        if (learning) {
            if (_.contains(this.state.willLearn, language)) {
                var index = this.state.willLearn.indexOf(language)
                var willLearn = update(this.state.willLearn, {
                    $splice: [[index, 1]]
                });
            } else {
                var willLearn = update(this.state.willLearn, {
                    $push: [language]
                });
            }
            this.setState({willLearn: willLearn})
        }
        else {
            if (_.contains(this.state.willTeach, language)) {
                var index = this.state.willTeach.indexOf(language)
                var willTeach = update(this.state.willTeach, {
                    $splice: [[index, 1]]
                });
            } else {
                var willTeach = update(this.state.willTeach, {
                    $push: [language]
                });
            }
            this.setState({willTeach: willTeach})
        }
    },
    handleStepChange: function(nextCompState) {
        this.setState({compState : nextCompState});
    },
    render : function(){
        //console.log(this.props.step)
        switch (this.props.step) {
            case 1:
                return(
                    <div className='registration-step'>
                      <StepOne
                          username={this.props.username}
                          usernameChange={this.handleUsernameChange}
                          password={this.props.password}
                          passwordChange={this.handlePasswordChange}
                          confirm={this.props.confirm}
                          confirmChange={this.handleConfirmChange}
                          handleStepChange={this.handleStepChange}
                          step={this.props.step}
                          actions={this.props.actions}
                      />
                    </div>
                );
                break;
            case 2:
                return(
                    <div className='registration-step'>
                        <StepTwo
                            learnSelected={this.state.learnSelected}
                            teachSelected={this.state.teachSelected}
                            handleIntentSelect={this.handleIntentSelect}
                            handleStepChange={this.handleStepChange}
                            compState={this.state.compState}/>
                    </div>
                );
                break;
            case 3:
                return(
                    <div className='registration-step'>
                        <StepThree languages={this.state.languages}
                            learnSelected={this.state.learnSelected}
                            teachSelected={this.state.teachSelected}
                            willLearn={this.state.willLearn}
                            handleLanguageSelect={this.handleLanguageSelect}
                            handleStepChange={this.handleStepChange}
                            compState={this.state.compState}/>
                    </div>
                );
                break;
            case 4:
                return(
                    <div className='registration-step'>
                        <StepFour languages={this.state.languages}
                            learnSelected={this.state.learnSelected}
                            teachSelected={this.state.teachSelected}
                            willTeach={this.state.willTeach}
                            handleLanguageSelect={this.handleLanguageSelect}
                            handleStepChange={this.handleStepChange}
                            compState={this.state.compState}/>
                    </div>
                );
                break;
            case 5:
                return(
                    <div className='registration-step'>
                        <StepFive username={this.state.username}
                            password={this.state.password}
                            willLearn={this.state.willLearn}
                            willTeach={this.state.willTeach}
                            handleStepChange={this.handleStepChange}
                            compState={this.state.compState}/>
                    </div>
                );
                break;
            case 6:
                return(
                    <div className='registration-step'>
                        <StepSix/>
                    </div>
                )
        }
    }
})

export default RegistrationForm;
