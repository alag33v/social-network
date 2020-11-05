import React from 'react'
import profileImage from '../../../../assets/images/rose.jpg'
import heart from '../../../../assets/images/heart.svg'
import style from './Post.module.css'

const Post = (props) => {
  return (
    <div className={style.wrapper}>
      <img className={style.image} src={profileImage} alt="" />
      <div>
        <p className={style.post__text}>{props.message}</p>
        <div className={style.post__likesWrapper}>
          <span className={style.post__likes}>{props.likes}</span>
          <img className={style.post__likesImg} src={heart} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Post