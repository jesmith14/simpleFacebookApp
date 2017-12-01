
import {
    SET_USERNAME,
    SET_PASSWORD,
    SET_AUTH,
    NEW_POST,
    NEW_GENERIC_POST,
    SET_WALL_USERNAME,
    UPDATE_NEWSFEED,
    UPDATE_FRIENDS,
    SET_ON_GENERIC_WALL

    } from './constants'
    
    export function setUsername(key) {
      return {type: SET_USERNAME, key}
    }
    
    export function setPassword(key) {
      return {type: SET_PASSWORD, key}
    }

    export function setAuth(UIusername, UIpassword) {
      return {type: SET_AUTH, username: UIusername, password: UIpassword}
    }

    export function newPost(dataFromUI) {
      return {type: NEW_POST, content: dataFromUI.content, user: dataFromUI.user, wallUsername: dataFromUI.wallUsername};
    }

    export function newGenericPost(dataFromUI) {
      return {type: NEW_GENERIC_POST, content: dataFromUI.content, user: dataFromUI.user, wallUsername: dataFromUI.wallUsername};
    }

    export function setWallUsername() {
      return {type: SET_WALL_USERNAME}
    }

    export function updateNewsfeed() {
      return {type: UPDATE_NEWSFEED}
    }

    export function updateFriends() {
      return {type: UPDATE_FRIENDS}
    }

    export function setOnGenericWall(dataFromUI) {
      console.log('THIS IS THE DATA FROM THE UI', dataFromUI)
      return {type: SET_ON_GENERIC_WALL, wallUsername: dataFromUI}
    }