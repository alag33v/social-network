import {profileAPI, usersAPI} from '../api/api'
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE-POST'
const SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS'

const initialState = {
  posts: [
    {id: 1, message: 'Не бросай то, что тебе нравится', likes: 31},
    {id: 2, message: 'Я горжусь тобой', likes: 18},
    {id: 3, message: 'Весь твой труд не останется без внимания', likes: 78},
    {id: 4, message: 'Не будь слишком строгим к себе', likes: 40},
    {id: 5, message: 'Совершать ошибки – совершенно нормально', likes: 38}
  ],
  profile: null,
  status: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: action.newPostText, likes: 0}],
        newPostText: ''
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    case SAVE_PHOTO_SUCCESS:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => {
  return async (dispatch) => {
    const response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
  }
}

export const getStatus = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
  }
}

export const updateStatus = (status) => {
  return async (dispatch) => {
    try {
      const response = await profileAPI.updateStatus(status)
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    } catch (error) {
    }
  }
}

export const savePhoto = (file) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccess(response.data.data.photos))
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    } else {
      dispatch(stopSubmit('edit-profile', {_error: response.data.messages[0]}))
      return Promise.reject(response.data.messages[0])
    }
  }
}

export default profileReducer