import React from 'react';
import style from './../Dialogs.module.css'

const Message = (props) => {
  return (
    <p className={style.message}>{props.message}</p>
  )
}

export default Message