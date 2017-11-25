
import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_AUTH,
  NEW_POST,
  SET_WALL_USERNAME,
  UPDATE_NEWSFEED,
  UPDATE_FRIENDS
} from '../controller/constants'

import {initialWall} from './wall'
import {initialNewsFeed} from './newsfeed'
import {initialFriends} from './friendslist'
import {users} from './users'

import * as _ from 'lodash';

let initialState = {
  error: '',
  username: 'Jessie Smith',
  password: '1234',
  loggedIn: false,
  wall: initialWall,
  wallUsername: '',
  newsfeed: initialNewsFeed,
  friends: initialFriends,
  users: users
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
            // this.state.wall.unshift(this.state.newPost)
        // this.setState({newsfeed: this.state.newsfeed.unshift(this.state.newPost)})

      let newPost = {
        content: action.content, 
        user: action.user, 
        wallUsername: action.wallUsername
      };
      // debugger;
    
      let newWall = _.clone(state.wall);
      let newNewsfeed = _.clone(state.newsfeed);
      newWall.unshift(newPost);
      newNewsfeed.unshift(newPost);
    return Object.assign({}, state, {
          wall: newWall,
          newsfeed: newNewsfeed,
    })

    case SET_WALL_USERNAME:
    return Object.assign({}, state, {
        wallUsername: state.wallUsername
    })

    case UPDATE_FRIENDS:
    return Object.assign({}, state, {
        friends : state.friends
    })

    default:
      return state
  }
}

export default model
