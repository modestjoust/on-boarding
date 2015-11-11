import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as AllActions from '../actions/actions';
//import { FriendList, AddFriendInput } from '../components';
import StepButton from '../components/navigator-components/StepButton'
import StepNavigator from '../components/StepNavigator'
import RegistrationForm from '../components/RegistrationForm'


class Root extends Component {
  handleClick(e) {
    console.log('clicked ' + e.target.id)
  }
  render() {
    const { step, username, password, confirm, dispatch } = this.props;
    const actions = bindActionCreators(AllActions, dispatch);
    //dispatch(actions.changeStep(2))
    return (
      <div>
        <StepNavigator actions={actions} />
        <RegistrationForm username={username} password={password} confirm={confirm} step={step} actions={actions} />
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
