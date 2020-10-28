import React from 'react'
import style from './Header.module.css'
import logo from './../images/ornithology.svg'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <header className={style.header}>
      <NavLink className={style.link} to="/profile">
        <img className={style.image} src={logo} alt="ornithology"/>
      </NavLink>
      <div>
        {props.isAuth
          ? <div>
            <NavLink className={style.login} to={'/profile'}>{props.login}</NavLink>
            <button onClick={props.logout}>Logout</button>
          </div>
          : <NavLink className={style.login} to={'/login'}>Login</NavLink>}
      </div>
    </header>
  )
}

export default Header