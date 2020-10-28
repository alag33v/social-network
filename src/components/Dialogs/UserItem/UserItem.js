import React from 'react';
import style from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const UserItem = (props) => {
  return (
    <NavLink className={style.userName} activeClassName={style.active} to={`/dialogs/${props.id}`}>{props.name}</NavLink>
  )
}

export default UserItem