import React from 'react'
import style from './Users.module.css'
import userImage from '../../assets/images/user.png'
import {NavLink} from 'react-router-dom'

const User = ({user, followingInProgress, follow, unfollow}) => {
  return (
    <div className={style.wrapper}>
      <div className={style.image__wrapper}>
        <NavLink to={`/profile/${user.id}`}>
          <img className={style.image} src={user.photos.small != null ? user.photos.small : userImage}></img>
        </NavLink>
        {user.followed
          ? <button className={style.btn} disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      unfollow(user.id)
                    }}>Unfollow</button>
          : <button className={style.btn} disabled={followingInProgress.some(id => id === user.id)}
                    onClick={() => {
                      follow(user.id)
                    }}>Follow</button>}
      </div>
      <div className={style.content}>
        <div className={style.content__left}>
          <h3 className={style.name}>{user.name}</h3>
          <p className={style.text}>{user.status}</p>
        </div>
        <div className={style.content__right}>
          <h4 className={style.country}>{'Country'}</h4>
          <h4 className={style.city}>{'City'}</h4>
        </div>
      </div>
    </div>
  )
}

export default User