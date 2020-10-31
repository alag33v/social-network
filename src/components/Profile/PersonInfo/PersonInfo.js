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
      <img className={style.photo} src={profile.photos.large || userImage} alt='Profile photo'/>
      {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
      <PersonStatusWithHooks status={status} updateStatus={updateStatus}/>
      {editMode
        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
        : <ProfileData profile={profile} isOwner={isOwner} activateEditMode={() => {
          setEditMode(true)
        }}/>}
    </div>
  )
}

const ProfileData = ({profile, isOwner, activateEditMode}) => {
  return (
    <div>
      {isOwner && <button onClick={activateEditMode}>Edit profile</button>}
      <div>
        FullName – {profile.fullName}
      </div>
      <div>
        Looking for a job? – {profile.lookingForAJob ? 'Yes' : 'No'}
      </div>
      <div>
        Job description: {profile.lookingForAJob && profile.lookingForAJobDescription || 'No description'}
      </div>
      <div>
        About me: {profile.aboutMe}
      </div>
      <div>
        <h3>Contacts:</h3>
        <div>{Object.keys(profile.contacts).map(key => {
          return <Contact contactTitle={key} contactValue={profile.contacts[key]} key={key}/>
        })}</div>
      </div>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return (
    <p>
      <b>{contactTitle}:</b> {contactValue}
    </p>
  )
}

export default PersonInfo