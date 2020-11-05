import React from 'react';
import style from './Dialogs.module.css'
import UserItem from './UserItem/UserItem'
import Message from './Message/Message'
import {Field, reduxForm} from 'redux-form'
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100)

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field className={style.textarea} component={Textarea} name={"newMessageText"} placeholder="Your message"
             validate={[required, maxLength100]}/>
      <button className={style.btn}>Add</button>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({
  form: 'dialogAddMessageForm'
})(AddMessageForm)

const Dialogs = (props) => {
  const state = props.dialogsPage
  const usersElements = state.users.map(user => <UserItem name={user.name} key={user.id} id={user.id}/>,)
  const messagesElements = state.messages.map(message => <Message message={message.message} key={message.id}
                                                                  id={message.id}/>)

  const addNewMessage = (value) => {
    props.sendMessage(value.newMessageText)
  }

  return (
    <div className={style.dialogs}>
      <h2 className={style.title}>Dialogs</h2>
      <div className={style.wrapper}>
        <div className={style.users}>
          {usersElements}
        </div>
        <div className={style.messages}>
          {messagesElements}
          <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
      </div>
    </div>
  )
}

export default Dialogs