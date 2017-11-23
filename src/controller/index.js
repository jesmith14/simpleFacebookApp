
import {
    SET_USERNAME,
    SET_PASSWORD,
    SET_AUTH,
    NEW_POST
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