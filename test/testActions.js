import test from 'ava'
import {actionTest} from 'redux-ava'

import {
    setUsername,
    setPassword,
    setAuth,
    newPost,
    newGenericPost,
    setWallUsername,
    updateNewsfeed,
    updateFriends,
    setOnGenericWall,
    setErrorTrue,
    setErrorFalse
} from '../src/controller'



test('setUsername',
    actionTest(setUsername, "abc", {type: 'SET_USERNAME', key:"abc"})
)