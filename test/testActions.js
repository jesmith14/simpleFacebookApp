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
    setErrorFalse,
    updateSearchTerm,
    setPhotoURL,
    setFollowing,
    setUnFollowing
} from '../src/controller'



test('setUsername',
    actionTest(setUsername, "abc", {type: 'SET_USERNAME', key:"abc"})
)

test('setPassword',
    actionTest(setPassword, "1234", {type: 'SET_PASSWORD', key:"1234"})
)

test('setAuth',
    actionTest(setAuth, "Jessie Smith", "1234", {type: 'SET_AUTH', username:"Jessie Smith", password:"1234"})
)

let dataFromUI = {
    content: "Whats up?",
    user: "Jessie Smith",
    wallUsername: "Yeng Tan"
}

test('newPost',
    actionTest(newPost, dataFromUI, {type: 'NEW_POST', content:"Whats up?",user:"Jessie Smith", wallUsername:"Yeng Tan"})
)

test('newGenericPost',
    actionTest(newGenericPost, dataFromUI, {type: 'NEW_GENERIC_POST', content:"Whats up?",user:"Jessie Smith", wallUsername:"Yeng Tan"})
)

test('setWallUsername',
    actionTest(setWallUsername, "Mickey Mouse", {type: 'SET_WALL_USERNAME', newWallUsername:"Mickey Mouse"})
)

test('updateNewsfeed',
    actionTest(updateNewsfeed, {type: 'UPDATE_NEWSFEED'})
)

test('updateFriends',
    actionTest(updateFriends, {type: 'UPDATE_FRIENDS'})
)

test('setOnGenericWall',
    actionTest(setOnGenericWall, "Claudia Macedo", {type: 'SET_ON_GENERIC_WALL', wallUsername: 'Claudia Macedo'})
)

test('setErrorTrue',
    actionTest(setErrorTrue, {type: 'SET_ERROR_TRUE'})
)

test('setErrorFalse',
    actionTest(setErrorFalse, {type: 'SET_ERROR_FALSE'})
)

test('updateSearchTerm',
    actionTest(updateSearchTerm, 'example.com', {type: 'UPDATE_SEARCH_TERM', searchTerm: 'example.com'})
)

test('setPhotoURL',
    actionTest(setPhotoURL, 'example.com', {type: 'SET_PHOTO_URL', newURL: 'example.com'})
)

test('setFollowing',
    actionTest(setFollowing, 'Kanye West', {type: 'SET_FOLLOWING', currentUser: 'Kanye West'})
)

test('setUnFollowing',
    actionTest(setUnFollowing, 'Kanye West', {type: 'SET_UNFOLLOWING', currentUser: 'Kanye West'})
)