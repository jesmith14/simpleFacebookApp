
import {
  SET_USERNAME,
  SET_PASSWORD,
  SET_AUTH,
  NEW_POST,
  NEW_GENERIC_POST,
  SET_WALL_USERNAME,
  UPDATE_NEWSFEED,
  UPDATE_FRIENDS,
  SET_ON_GENERIC_WALL,
  SET_ERROR_FALSE,
  SET_ERROR_TRUE,
  UPDATE_SEARCH_TERM,
  SET_PHOTO_URL
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
  wallUsername: 'Jessie Smith',
  newsfeed: initialNewsFeed,
  friends: initialFriends,
  users: users,
  onFriends: true,
  errorLoggingIn: false,
  searchTerm: '',
  photoURL: 'https://pbs.twimg.com/profile_images/764226754722471936/Gga2mirv_400x400.jpg'
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
    if(action.username == state.username && action.password == state.password) {
      return Object.assign({}, state, {
          loggedIn: !state.loggedIn,
          username: state.username,
          wallUsername: state.username
        })
    }

    case NEW_POST:
      let newPost = {
        content: action.content, 
        user: action.user, 
        wallUsername: action.wallUsername
      };
    
      let newWall = _.clone(state.wall);
      let newNewsfeed = _.clone(state.newsfeed);
      newWall.unshift(newPost);
      newNewsfeed.unshift(newPost);

    return Object.assign({}, state, {
          wall: newWall,
          newsfeed: newNewsfeed,
    })

    case NEW_GENERIC_POST:
      let newGenericPost = {
        content: action.content, 
        user: action.user, 
        wallUsername: action.wallUsername
      };
    newNewsfeed = _.clone(state.newsfeed);
    newNewsfeed.unshift(newGenericPost);
    return Object.assign({}, state, {
          newsfeed: newNewsfeed,
          wallUsername: state.wallUsername,
          onFriends: true
    })

    case SET_WALL_USERNAME:
    return Object.assign({}, state, {
        wallUsername: action.newWallUsername
    })

    case UPDATE_FRIENDS:
    return Object.assign({}, state, {
        friends : state.friends
    })

    case SET_ON_GENERIC_WALL:
    return Object.assign({}, state, {
      onFriends : false,
      wallUsername: action.wallUsername
    })

    case SET_ERROR_FALSE:
    return Object.assign({}, state, {
      errorLoggingIn: false
    })

    case SET_ERROR_TRUE:
    return Object.assign({}, state, {
      errorLoggingIn: true
    })

    case UPDATE_SEARCH_TERM:
    return Object.assign({}, state, {
      searchTerm: action.searchTerm
    })

    case SET_PHOTO_URL:
    return Object.assign({}, state, {
      photoURL: action.newURL
    })
  
    default:
      return state
  }
}

export default model
