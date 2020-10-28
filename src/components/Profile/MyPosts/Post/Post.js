import React from 'react'
import profileImage from './../../../images/people/1.JPG';
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.wrapper}>
      <img className={style.image} src={profileImage} alt="" />
      <div>
        <p className={style.text}>{props.message}</p>
        <div className={style.like}>Like{props.likes}</div>
      </div>
    </div>
  )
}

export default Post