import React from "react";
import StepOne from './steps/StepOne.js';
import StepTwo from './steps/StepTwo.js';
import StepThree from './steps/StepThree.js';
import StepFour from './steps/StepFour.js';
import StepFive from './steps/StepFive.js';

var RegistrationForm = React.createClass({
    getInitialState: function() {
        return {compState: 0,
                username: '',
                password: '',
                confirm: '',
                learnSelected: false,
                teachSelected: false,
                languages: {
                    english: {name: 'English',
                        willTeach: false,
                        willLearn: false},
                    czech: {name: 'Czech',
                        willTeach: false,
                        willLearn: false},
                    spanish: {name: 'Spanish',
                        willTeach: false,
                        willLearn: false},
                    mandarin: {name: 'Mandarin',
                        willTeach: false,
                        willLearn: false},
                    slovenian: {name: 'Slovenian',
                        willTeach: false,
                        willLearn: false},
                    latin: {name: 'Latin',
                        willTeach: false,
                        willLearn: false},
                    french: {name: 'French',
                        willTeach: false,
                        willLearn: false},
                    russian: {name: 'Russian',
                        willTeach: false,
                        willLearn: false},
                    signLanguage: {name: 'Sign Language',
                        willTeach: false,
                        willLearn: false},
                    german: {name: 'German',
                        willTeach: false,
                        willLearn: false},
                    croatian: {name: 'Croatian',
                        willTeach: false,
                        willLearn: false},
                    serbian: {name: 'Serbian',
                        willTeach: false,
                        willLearn: false},
                    slovak: {name: 'Slovak',
                        willTeach: false,
                        willLearn: false},
                    norwegian: {name: 'Norwegian',
                        willTeach: false,
                        willLearn: false},
                    italian: {name: 'Italian',
                        willTeach: false,
                        willLearn: false},
                }
              };
    },

/*    componentWillMount: function() {
      this.setState({steps : [
          {name: 'StepOne',
            component: <StepOne
            username={this.state.username}
            usernameChange={this.handleUsernameChange}
            password={this.state.password}
            passwordChange={this.handlePasswordChange}
            confirm={this.state.confirm}
            confirmChange={this.handleConfirmChange}
            />},
          {name: 'StepTwo', component: <StepTwo/>},
          {name: 'StepThree', component: <StepThree/>},
          {name: 'StepFour', component: <StepFour/>}
        ]})
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
    handleLanguageSelect: function(language, will) {
        //var language = language;
        //this.setState({languages.language.})
        return;
    },
/*
    handleKeyDown: function(evt) {
        if(evt.which === 13) {
          this.state.compState++;
        }
    },
*/
    handleStepChange: function(nextCompState) {
        //console.log(this.state.compState);
        this.setState({compState : nextCompState});
        //console.log(this.state.compState);
        //console.log(this.children);
    },

    render : function(){

      switch (this.state.compState) {
        case 0:
          return(
            <div className='registration-step'>
              <StepOne
                  username={this.state.username}
                  usernameChange={this.handleUsernameChange}
                  password={this.state.password}
                  passwordChange={this.handlePasswordChange}
                  confirm={this.state.confirm}
                  confirmChange={this.handleConfirmChange}
                  handleStepChange={this.handleStepChange}
                  compState={this.state.compState}
              />
            </div>
          );
          break;
        case 1:
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
        case 2:
          return(
            <div className='registration-step'>
              <StepThree languages={this.state.languages}
                learnSelected={this.state.learnSelected}
                teachSelected={this.state.teachSelected}
                handleLanguageSelect={this.handleLanguageSelect}
                handleStepChange={this.handleStepChange}
                compState={this.state.compState}/>
            </div>
          );
          break;
        case 3:
          return(
            <div className='registration-step'>
              <StepFour languages={this.state.languages}
                learnSelected={this.state.learnSelected}
                teachSelected={this.state.teachSelected}
                handleLanguageSelect={this.handleLanguageSelect}
                handleStepChange={this.handleStepChange}
                compState={this.state.compState}/>
            </div>
          );
          break;
         case 4:
            return(
                <div className='registration-step'>
                    <StepFive/>
                </div>
            )
        }
      }
})

export default RegistrationForm;

//
//{this.state.steps[this.state.compState].component}
//

            /*
                getInitialState: function() {
                    return {username: '',
                            password: '',
                            confirm: ''
                  };
                },


                handleUsernameChange: function(event) {
                    this.setState({username: event.target.value});
                },
                handlePasswordChange: function(event) {
                    this.setState({password: event.target.value});
                },
                handleConfirmChange: function(event) {
                    this.setState({confirm: event.target.value});
                },
            */





/*
            <form>
            <label>Username</label>
            <input type='text' defaultValue='' placeholder='Username' onChange={this.handleUsernameChange}/>
            <label>Password:</label>
            <input type='password' defaultValue='' placeholder='Password' onChange={this.handlePasswordChange}/>
            <label>Confirm password:</label>
            <input type='password' defaultValue='' placeholder='Confirm Password' onChange={this.handleConfirmChange}/>
            </form>
            <p>Username: {this.state.username}</p>
            <p>Password: {this.state.password}</p>
            <p>Confirm: {this.state.confirm}</p>
*/
