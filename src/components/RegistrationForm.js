import React from 'react';
import StepOne from './steps/StepOne.js';
import StepTwo from './steps/StepTwo.js';
import StepThree from './steps/StepThree.js';
import StepFour from './steps/StepFour.js';
import StepFive from './steps/StepFive.js';
import StepSix from './steps/StepSix.js';
import NextPrevButtons from './navigator-components/NextPrevButtons'

var RegistrationForm = React.createClass({
    render : function(){
        switch (this.props.step) {
            case 1:
                return(
                    <div>
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
                      learnSelected={this.props.learnSelected}
                      teachSelected={this.props.teachSelected}
                      handleIntentSelect={this.handleIntentSelect}
                      handleStepChange={this.handleStepChange}
                      step={this.props.step}
                      actions={this.props.actions}
                    />
                  </div>
                );
                break;
            case 3:
                return(
                  <div className='registration-step'>
                    <StepThree
                      learnSelected={this.props.learnSelected}
                      teachSelected={this.props.teachSelected}
                      willLearn={this.props.willLearn}
                      handleLanguageSelect={this.handleLanguageSelect}
                      handleStepChange={this.handleStepChange}
                      step={this.props.step}
                      actions={this.props.actions}
                    />
                  </div>
                );
                break;
            case 4:
                return(
                  <div className='registration-step'>
                    <StepFour
                      learnSelected={this.props.learnSelected}
                      teachSelected={this.props.teachSelected}
                      willTeach={this.props.willTeach}
                      handleLanguageSelect={this.handleLanguageSelect}
                      handleStepChange={this.handleStepChange}
                      step={this.props.step}
                      actions={this.props.actions}
                    />
                  </div>
                );
                break;
            case 5:
                return(
                  <div className='registration-step'>
                    <StepFive username={this.props.username}
                      password={this.props.password}
                      willLearn={this.props.willLearn}
                      willTeach={this.props.willTeach}
                      handleStepChange={this.handleStepChange}
                      step={this.props.step}
                      actions={this.props.actions}
                    />
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
