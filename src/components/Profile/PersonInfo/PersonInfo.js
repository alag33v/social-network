import React, {useState} from 'react'
import style from './PersonInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'
import PersonStatusWithHooks from './PersonStatusWithHooks';
import userImage from '../../../assets/images/user.png'
import ProfileDataForm from './PersonDataForm'

const PersonInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
  const [editMode, setEditMode] = useState(false)


  if (!profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <div className={style.person}>
      <div className={style.person__wrapper}>
        <img className={style.photo} src={profile.photos.large || userImage} alt=''/>
        <div>
          <PersonStatusWithHooks status={status} updateStatus={updateStatus}/>
          {isOwner && <input className={style.person__input} type="file" onChange={onMainPhotoSelected}/>}
        </div>
      </div>

      <div className={style.info}>
        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => {
            setEditMode(true)
          }}/>}
      </div>
    </div>
  )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
  return (
    <div>
      {isOwner && <button className={style.btnEdit} onClick={activateEditMode}>Edit profile</button>}
      <div className={style.person__name}><span>Name:</span> {profile.fullName}</div>
      <div className={style.person__job}><span>Looking for a job?</span> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
      <div className={style.person__jobDescription}>
        <span>Job description:</span> {profile.lookingForAJob ? profile.lookingForAJobDescription : 'No description'}
      </div>
      <div className={style.person__about}><span>About me:</span> {profile.aboutMe}</div>
      <div className={style.contacts}>
        <h3 className={style.contacts__title}>Contacts:</h3>
        <div>{Object.keys(profile.contacts).map(key => {
          return <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
        })}</div>
      </div>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return (
    <div className={style.contacts__social}><span>{contactTitle}:</span> {contactValue}</div>
  )
}

export default PersonInfo