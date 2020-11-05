import React from 'react'
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls'
import {reduxForm} from 'redux-form'
import style from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <button className={style.btnSave}>Save</button>
      {error && <div className={style.formError}>{error}</div>}
      <div className={style.name}>FullName: {createField(Input, 'fullName', 'Full name')}</div>
      <div className={style.job}>
        Looking for a job? {createField(Input, 'lookingForAJob', null, null, {type: 'checkbox'})}
      </div>
      <div className={style.jobDescription}>
        Job description: {createField(Textarea, 'lookingForAJobDescription', 'Job description')}
      </div>
      <div className={style.about}>
        About me: {createField(Textarea, 'aboutMe', 'About me')}
      </div>
      <div className={style.contacts}>
        <h3 className={style.contacts__title}>Contacts:</h3>
        <div>{Object.keys(profile.contacts).map(key => {
          return (
            <div className={style.contacts__social}>{key}: {createField(Input, 'contacts.' + key, key)}</div>
          )
        })}</div>
      </div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({
  form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm