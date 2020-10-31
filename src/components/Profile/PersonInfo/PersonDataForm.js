import React from 'react'
import {createField, Input, Textarea} from '../../common/FormsControls/FormsControls'
import {reduxForm} from 'redux-form'
import style from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = ({handleSubmit, profile, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <button>Save</button>
      {error &&
      <div className={style.formError}>
        {error}
      </div>}
      <div>
        FullName: – {createField(Input, 'fullName', 'Full name')}
      </div>
      <div>
        Looking for a job? – {createField(Input, 'lookingForAJob', null, null, {type: 'checkbox'})}
      </div>
      <div>
        Job description: {createField(Textarea, 'lookingForAJobDescription', 'Job description')}
      </div>
      <div>
        About me: {createField(Textarea, 'aboutMe', 'About me')}
      </div>
      <h3>Contacts:</h3>
      <div>{Object.keys(profile.contacts).map(key => {
        return (
          <div>
            <b>{key}:</b>
            {createField(Input, 'contacts.' + key, key)}
          </div>
        )
      })}</div>
    </form>
  )
}

const ProfileDataFormReduxForm = reduxForm({
  form: 'edit-profile'
})(ProfileDataForm)

export default ProfileDataFormReduxForm