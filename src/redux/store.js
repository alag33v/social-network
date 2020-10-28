import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Harry Potter', likes: 46},
        {id: 2, message: `Ron Weasley`, likes: 28},
        {id: 3, message: `Hermione Granger`, likes: 37},
        {id: 4, message: `Drako Malfoy`, likes: 53}
      ],
      newPostText: ''
    },
    dialogsPage: {
      users: [
        {id: 1, name: 'Alexey',},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Pavel'},
        {id: 4, name: 'Vladislav'},
        {id: 5, name: 'Ivan'}
      ],
      messages: [
        {id: 1, message: 'Hey, how are you'},
        {id: 2, message: `I'm fine`},
        {id: 3, message: `What's going on?`},
        {id: 4, message: 'I dont know'},
        {id: 5, message: 'Okie Dokie'}
      ],
      newMessageText: ''
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('Store changed')
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state)
  }
}

export default store