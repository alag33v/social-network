import React from 'react'
import PersonInfo from './PersonInfo/PersonInfo'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
  return (
    <>
      <PersonInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                  isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
      <MyPostsContainer/>
    </>
  )
}

export default Profile