import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import photoUser from '../../../img/user.png';
import { useState } from 'react';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {

  const [editMode, setEditMode] = useState(false);

  const onSubmit = (formData) => {
    saveProfile(formData).then(
      () => {
        setEditMode(false);
      }
    )
  }

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  return (

    <div>
      <div className={s.content}>
      </div>
      <div className={s.main}>
        <div>
          <img src={profile.photos.large || photoUser} className={s.mainPhoto} alt=' ' />
        </div>
        <div>
          {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
        </div>
      </div>
      { editMode
        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
        : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {

  return (
    <div>
      {isOwner && <button onClick={goToEditMode} >edit</button>}
      <div>
        <b>Full name: {profile.fullName}</b>
      </div>
      <div><b>About me</b>: {profile.aboutMe} </div>

      <div><b>Looking  for a job</b>: {profile.lookingForAJob ? "Yes" : "No"} </div>
      <div><b>Job status</b>: {profile.lookingForAJobDescription} </div>
      <div><b>Contacts</b>:</div>
      <div className={s.contact} >{Object.keys(profile.contacts).map(key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
      })}
      </div>
    </div>
  )
}

const Contact = ({ contactTitle, contactValue }) => {
  return <div> <b> {contactTitle} </b>: {contactValue} </div>
}


export default ProfileInfo;