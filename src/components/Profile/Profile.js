import React from 'react'
import style from './Profile.module.css'
import PersonInfo from './PersonInfo/PersonInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <div className={style.profile}>
      <PersonInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
      <MyPostsContainer/>
    </div>
  )
}

export default Profile