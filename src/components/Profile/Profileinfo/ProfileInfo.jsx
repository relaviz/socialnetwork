import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import photoUser from '../../../img/user.png';

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto }) => {
debugger;
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
      
        <img src={profile.photos.large || photoUser} className={s.mainPhoto}  alt=' ' />
        { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>About me: {profile.aboutMe} </div>
      <div>Name: {profile.fullName} </div>
      <div>Job status: {profile.lookingForAJobDescription} </div>
    </div>
  )
}

export default ProfileInfo;