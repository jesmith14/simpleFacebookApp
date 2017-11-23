
import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_AUTH
} from '../controller/constants'

import {initialWall} from './wall'

console.log('heerrree', initialWall)

let initialState = {
  error: '',
  username: 'Jessie',
  password: '1234',
  loggedIn: true,
  wall: initialWall
}

function model(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return Object.assign({}, state, {
        username: action.key
      })

    case SET_PASSWORD:
      return Object.assign({}, state, {
        password: action.key
      })

    case SET_AUTH:
    return Object.assign({}, state, {
        loggedIn: !state.loggedIn
      })

    default:
      return state
  }
}

export default model
