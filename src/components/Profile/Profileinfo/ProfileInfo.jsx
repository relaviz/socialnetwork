import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {

  if (!profile) {
    return <Preloader />
  }
  return (

    <div>
      <div className={s.content}>
      </div>
      <div className={s.avatar}>
        <img src='https://ak.picdn.net/shutterstock/videos/1021270852/thumb/1.jpg' alt=' ' />
      </div>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      <div>About me: {profile.aboutMe} </div>
      <div>Name: {profile.fullName} </div>
      <div>Job status: {profile.lookingForAJobDescription} </div>
    </div>
  )
}

export default ProfileInfo;