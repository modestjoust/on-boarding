import * as types from '../constants/ActionTypes'

export function changeStep(step) {
  return {
    type: types.CHANGE_STEP,
    step: step
  }
}
export function updateCredentials(username, password, confirm) {
  return {
    type: types.UPDATE_CREDENTIALS,
    username: username,
    password: password,
    confirm: confirm
  }
}
export function updateIntent(intent) {
  return {
    type: types.UPDATE_INTENT,
    intent: intent
  }
}
export function updateWillLearn(language) {
  return {
    type: types.UPDATE_WILL_LEARN,
    language: language
  }
}
export function updateWillTeach(language) {
  return {
    type: types.UPDATE_WILL_TEACH,
    language: language
  }
}
