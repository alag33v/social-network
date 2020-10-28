const ADD_MESSAGE = 'ADD-MESSAGE'

const initialState = {
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
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: 6, message: action.newMessageText}]
      }
    default:
      return state
  }
}

export const addMessageCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})

export default dialogsReducer