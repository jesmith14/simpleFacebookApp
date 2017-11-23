
import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_AUTH,
  NEW_POST,
  SET_WALL_USERNAME
} from '../controller/constants'

import {initialWall} from './wall'

let initialState = {
  error: '',
  username: 'Jessie',
  password: '1234',
  loggedIn: false,
  wall: initialWall,
  wallUsername: ''
}

function model(state = initialState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return Object.assign({}, state, {
        username: action.key,
        wallUsername: action.key
      })

    case SET_PASSWORD:
      return Object.assign({}, state, {
        password: action.key
      })

    case SET_AUTH:
    return Object.assign({}, state, {
        loggedIn: !state.loggedIn
      })

    case NEW_POST:
    return Object.assign({}, state, {
        wall: state.wall
    })

    case SET_WALL_USERNAME:
    return Object.assign({}, state, {
        wallUsername: state.wallUsername
    })

    default:
      return state
  }
}

export default model
