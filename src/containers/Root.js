import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AllActions from '../actions/actions';
//import { FriendList, AddFriendInput } from '../components';
import StepButton from '../components/navigator-components/StepButton'
import StepNavigator from '../components/StepNavigator'
import RegistrationForm from '../components/RegistrationForm'
import store from '../index.js'


class Root extends Component {
  handleClick(e) {
    //store.dispatch(AllActions.changeStep(10))
  }
  render() {
    const { step, username, password, confirm, learnSelected, teachSelected, willLearn, willTeach, dispatch } = this.props;
    const actions = bindActionCreators(AllActions, dispatch);
    //dispatch(actions.changeStep(2))
    return (
      <div>
        <StepNavigator actions={actions} />
        <RegistrationForm username={username}
          password={password}
          confirm={confirm}
          step={step}
          learnSelected={learnSelected}
          teachSelected={teachSelected}
          willLearn={willLearn}
          willTeach={willTeach}
          actions={actions} />
      </div>
    )
  }
}

function select(state) {
    return {
        step: state.step,
        username: state.username,
        password: state.password,
        confirm: state.confirm,
        learnSelected: state.learnSelected,
        teachSelected: state.teachSelected,
        willLearn: state.willLearn,
        willTeach: state.willTeach
    }
}

export default connect(select)(Root)
