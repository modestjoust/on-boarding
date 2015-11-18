import * as types from '../constants/ActionTypes'
import { combineReducers } from 'redux'
var update = require('react-addons-update')

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

  switch (action.type) {

    case types.CHANGE_STEP:
      return Object.assign({}, state, {
            step: action.step
      })

    case types.UPDATE_CREDENTIALS:
      return Object.assign({}, state, {
                username: action.username,
                password: action.password,
                confirm: action.confirm
      })

    case types.UPDATE_INTENT:
      if (action.intent === 'learn') {
        return Object.assign({}, state, {
                  learnSelected: !state.learnSelected,
                  willLearn: initialState.willLearn
        })
      }
      else {
        return Object.assign({}, state, {
                  teachSelected: !state.teachSelected,
                  willTeach: initialState.willTeach
        })
      }

    case types.UPDATE_WILL_LEARN:
      var language = action.language
      if (_.contains(state.willLearn, language)) {
        var index = state.willLearn.indexOf(language)
        var willLearn = update(state.willLearn, {
            $splice: [[index, 1]]
        });
      } else {
        var willLearn = update(state.willLearn, {
            $push: [language]
        });
      }
      return Object.assign({}, state, {
                willLearn: willLearn
      })

    case types.UPDATE_WILL_TEACH:
      var language = action.language
      if (_.contains(state.willTeach, language)) {
          var index = state.willTeach.indexOf(language)
          var willTeach = update(state.willTeach, {
              $splice: [[index, 1]]
          });
      } else {
          var willTeach = update(state.willTeach, {
              $push: [language]
          });
      }
      return Object.assign({}, state, {
                willTeach: willTeach
      })

  }
  return state
}
