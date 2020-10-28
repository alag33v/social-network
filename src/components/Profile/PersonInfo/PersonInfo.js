import React from 'react'
import style from './PersonInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import PersonStatus from './PersonStatus'
import PersonStatusWithHooks from './PersonStatusWithHooks';

const PersonInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }

  return (
    <div className={style.person}>
      <h3>{profile.fullName}</h3>
      <img src={profile.photos.large} alt='Profile photo'/>

      <PersonStatusWithHooks status={status} updateStatus={updateStatus}/>

      <p>{profile.aboutMe}</p>
      <p>В поисках работы?</p>
      <p>{profile.lookingForAJobDescription}</p>
      <p>Social</p>
      <a href={profile.contacts.twitter} target='_blank'>twitter</a>
    </div>
  )
}

export default PersonInfo