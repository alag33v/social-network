import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/images/ornithology.svg'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <header className={style.header}>
          <NavLink to="/profile">
            <img className={style.image} src={logo} alt="ornithology"/>
          </NavLink>
          <div>
            {props.isAuth
              ? <div>
                <NavLink className={style.login} to={'/profile'}>{props.login}</NavLink>
                <button className={style.btnLogout} onClick={props.logout}>Log out</button>
              </div>
              : <NavLink className={style.login} to={'/login'}>Login</NavLink>}
          </div>
        </header>
      </div>
    </div>

  )
}

export default Header