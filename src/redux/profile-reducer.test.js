import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer'
import React from 'react'

const state = {
  posts: [
    {id: 1, message: 'Harry Potter', likes: 46},
    {id: 2, message: `Ron Weasley`, likes: 28},
    {id: 3, message: `Hermione Granger`, likes: 37},
    {id: 4, message: `Drako Malfoy`, likes: 53}
  ]
}

test('length of post should be incremented', () => {
  // 1) Test data
  const action = addPostActionCreator('alageev')
  // 2) Action
  const newState = profileReducer(state, action)
  // 3) Expectation
  expect(newState.posts.length).toBe(5)
})

test('message of new post should be correct', () => {
  // 1) Test data
  const action = addPostActionCreator('alageev')
  // 2) Action
  const newState = profileReducer(state, action)
  // 3) Expectation
  expect(newState.posts[4].message).toBe('alageev')
})

test('length of array after deleting should be decremented', () => {
  // 1) Test data
  const action = deletePost(1)
  // 2) Action
  const newState = profileReducer(state, action)
  // 3) Expectation
  expect(newState.posts.length).toBe(3)
})

test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1) Test data
  const action = deletePost(1000)
  // 2) Action
  const newState = profileReducer(state, action)
  // 3) Expectation
  expect(newState.posts.length).toBe(4)
})