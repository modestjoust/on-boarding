import React from 'react';
import StepOne from './steps/StepOne.js';
import StepTwo from './steps/StepTwo.js';
import StepThree from './steps/StepThree.js';
import StepFour from './steps/StepFour.js';
import StepFive from './steps/StepFive.js';
import StepSix from './steps/StepSix.js';
import StepNavigator from '../components/StepNavigator'

var _ = require('lodash')

var RegistrationForm = React.createClass({
    render : function() {
      let registrationStep = this.getRegistrationStep()
      let stepNavigator = <StepNavigator step={this.props.step}
                            availableSteps={this.state.availableSteps}
                            handleStepChange={this.handleStepChange}
                            actions={this.props.actions} />

      return (
        <div>
          {stepNavigator}
          {registrationStep}
        </div>
      )
    },
    getInitialState : function() {
      return({
        availableSteps: [1]
      })
    },
    getRegistrationStep: function() {
      switch (this.props.step) {
          case 1:
              return (
                    <StepOne
                      ref='stepOne'
                      username={this.props.username}
                      password={this.props.password}
                      confirm={this.props.confirm}
                      step={this.props.step}
                      handleStepChange={this.handleStepChange}
                      actions={this.props.actions}
                    />
              );
              break;
          case 2:
              return(
                  <StepTwo
                    learnSelected={this.props.learnSelected}
                    teachSelected={this.props.teachSelected}
                    step={this.props.step}
                    handleStepChange={this.handleStepChange}
                    toggleStepAvailable={this.toggleStepAvailable}
                    actions={this.props.actions}
                  />
              );
              break;
          case 3:
              return(
                  <StepThree
                    learnSelected={this.props.learnSelected}
                    teachSelected={this.props.teachSelected}
                    willLearn={this.props.willLearn}
                    step={this.props.step}
                    handleStepChange={this.handleStepChange}
                    actions={this.props.actions}
                  />
              );
              break;
          case 4:
              return(
                  <StepFour
                    learnSelected={this.props.learnSelected}
                    teachSelected={this.props.teachSelected}
                    willTeach={this.props.willTeach}
                    step={this.props.step}
                    handleStepChange={this.handleStepChange}
                    actions={this.props.actions}
                  />
              );
              break;
          case 5:
              return(
                  <StepFive
                    username={this.props.username}
                    password={this.props.password}
                    learnSelected={this.props.learnSelected}
                    teachSelected={this.props.teachSelected}
                    willLearn={this.props.willLearn}
                    willTeach={this.props.willTeach}
                    step={this.props.step}
                    handleStepChange={this.handleStepChange}
                    actions={this.props.actions}
                  />
              );
              break;
          case 6:
              return(
                  <StepSix/>
              )
      }
    },
    handleStepChange : function(stepToGoTo) {
      // Validate step change based on step we are in. Step changes backwards are
      // allowed. Step changes forward have requirements. 
      var validated = false;
      var stepToGoTo = stepToGoTo;

      switch (this.props.step) {

        case 1:
          // 1 -> 2 requires valid credentials
          if (this.refs.stepOne.refs.formWrapper.state.goodUsername &&
              this.refs.stepOne.refs.formWrapper.state.goodPassword &&
              this.refs.stepOne.refs.formWrapper.state.passwordsMatch) {

            var username = this.refs.stepOne.refs.formWrapper.refs.usernameInput.refs.formBox.value;
            var password = this.refs.stepOne.refs.formWrapper.refs.passwordInput.refs.formBox.value;
            var confirm = this.refs.stepOne.refs.formWrapper.refs.confirmInput.refs.formBox.value;

            this.props.actions.updateCredentials(username, password, confirm)

            if (!this.state.availableSteps.includes(2))
              this.toggleStepAvailable(2)

            validated = true;
          }
          break;

        case 2:
          // 2 -> 3|4 requires that one or both intents are selected
          if (stepToGoTo <= this.props.step)
            validated = true
          if (stepToGoTo === 3) {
            this.props.learnSelected ?
              validated = true :
              this.props.teachSelected ?
                stepToGoTo++ :
                null
          }
          if (stepToGoTo > 3) {
            validated = true
          }
          break;

        case 3:
          // 3 -> 4|5 requires that at least one language has been selected
          if (stepToGoTo <= this.props.step)
            validated = true
          if (!(this.props.willLearn.length === 0)) {
            if (stepToGoTo === 4) {
              this.props.teachSelected ?
                validated = true :
                stepToGoTo++
            }
            if (stepToGoTo > 4) {
              validated = true
              if (!this.state.availableSteps.includes(5))
                this.toggleStepAvailable(5)
            }
          }
          break;

        case 4:
          // 4 -> 5 requires that at least one language has been selected
          if (stepToGoTo === 3) {
            this.props.learnSelected ?
              validated = true :
              stepToGoTo--
          }
          if (stepToGoTo <= 2)
            validated = true
          if (!(this.props.willTeach.length === 0)) {
            if (stepToGoTo > this.props.step) {
                validated = true
                if (!this.state.availableSteps.includes(5))
                  this.toggleStepAvailable(5)
            }
          }
          break;

        case 5:
          if (stepToGoTo === 4) {
            this.props.teachSelected ?
              validated = true :
              this.props.learnSelected ?
                stepToGoTo-- :
                null
          }
          if (stepToGoTo <= 3)
            validated = true
          if (stepToGoTo > this.props.step)
            validated = true
          break;

        }

      console.log("validated = " + validated)
      if (validated) {
        this.props.actions.changeStep(stepToGoTo)
      }

    },
    toggleStepAvailable(step) {
      let temp = this.state.availableSteps;
      this.state.availableSteps.includes(step) ?
        temp = _.without(temp, step) : (
        temp.push(step),
        temp.sort()
      )
      this.setState({availableSteps: temp})
    }
})

export default RegistrationForm
