import { combineReducers } from 'redux';

const initialState = {
  step: 1,
  username: '',
  password: '',
  confirm: '',
  learnSelected: false,
  teachSelected: false,
  willLearn: [],
  willTeach: []
}

export default function stepReducer(state = initialState, action) {
  console.log('in reducer')
  //switch (action.type) {
  //  case CHANGE_STEP:
      console.log('changing step to ' + action.step)
  //    return Object.assign({}, state, {
  //          step: action.step
  //}
  //return state
}
export default function usernameReducer(state = initialState, action) {
  switch (action.type) {
    case 'USERNAME_UPDATE':
      return Object.assign({}, state, {
                username: action.username
      })
  }
  return state
}
export default function passwordReducer(state = initialState, action) {
  switch (action.type) {
    case 'PASSWORD_UPDATE':
      return Object.assign({}, state, {
                password: action.password
      })
  }
  return state
}
export default function confirmReducer(state = initialState, action) {
  switch (action.type) {
    case 'CONFIRM_UPDATE':
      return Object.assign({}, state, {
                confirm: action.confirm
      })
  }
  return state
}
const reducer = combineReducers({
    step: stepReducer
})
