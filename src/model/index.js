
import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_AUTH
} from '../controller/constants'

let initialState = {
  error: '',
  username: 'Jessie',
  password: '1234',
  loggedIn: true
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
