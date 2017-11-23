
import {
    SET_USERNAME,
    SET_PASSWORD,
    SET_AUTH,
    NEW_POST,
    SET_WALL_USERNAME
    } from './constants'
    
    export function setUsername(key) {
      return {type: SET_USERNAME, key}
    }
    
    export function setPassword(key) {
      return {type: SET_PASSWORD, key}
    }

    export function setAuth() {
      return {type: SET_AUTH}
    }

    export function newPost() {
      return {type: NEW_POST}
    }

    export function setWallUsername() {
      return {type: SET_WALL_USERNAME}
    }