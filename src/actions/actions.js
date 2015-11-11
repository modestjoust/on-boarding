import * as types from '../constants/ActionTypes'

// export const CHANGE_STEP = 'CHANGE_STEP'
// export const USERNAME_UPDATE = 'USERNAME_UPDATE'
// export const PASSWORD_UPDATE = 'PASSWORD_UPDATE'
// export const CONFIRM_UPDATE = 'CONFIRM_UPDATE'

export function changeStep(step) {
  console.log('in action')
  return {
    type: types.CHANGE_STEP,
    step
  }
}
export function usernameUpdate(username) {
  console.log('in action')
  return {
    type: types.USERNAME_UPDATE,
    username
  }
}
export function passwordUpdate(password) {
  console.log('in action')
  return {
    type: types.PASSWORD_UPDATE,
    password
  }
}
export function confirmUpdate(confirm) {
  console.log('in action')
  return {
    type: types.CONFIRM_UPDATE,
    confirm
  }
}
