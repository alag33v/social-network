import React from 'react'
import style from './Navigation.module.css'
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className={style.list}>
        <li className={style.item}>
          <NavLink className={style.link} activeClassName={style.active} to="/profile">Profile</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} activeClassName={style.active} to="/dialogs">Messages</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} activeClassName={style.active} to="/users">Users</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} activeClassName={style.active} to="/news">News</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} activeClassName={style.active} to="/music">Music</NavLink>
        </li>
        <li className={style.item}>
          <NavLink className={style.link} activeClassName={style.active} to="/settings">Settings</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;