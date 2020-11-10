import React from 'react';
import { reduxForm } from 'redux-form';
import { createField, Input, Textarea } from '../../common/FormsControls/FormsControls';
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit} >
       <div>
        <button>Save</button>
      </div>
      {error && <div className={s.formSummaryError} >
        {error}
      </div>}
      <div>
        <b>Full name: 
          {createField("Full name", "fullName", [], Input)}
        </b>
      </div>
      <div><b>Looking  for a job</b>{createField(null, "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div><b>Job status</b>: 
        {createField("My proffesionall skils", "lookingForAJobDescription", [], Textarea)}
      </div>
      <div><b>About me</b>: 
        {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div><b>Contacts</b>:</div>
      <div className={s.contact} >{Object.keys(profile.contacts).map(key => {
        return( 
        <div>{key}: {createField(key, "contacts." +key, [], Input)}</div>)
      })}
      </div>
    </form>
  )
}
const ProfileDataFormReduxForm = reduxForm({ form: 'edit-pdofile' })(ProfileDataForm)



export default ProfileDataFormReduxForm;