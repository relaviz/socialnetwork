import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />  
  }
  return (
    
  <div>
    <div className={s.content}>
      {/* закоментировал эту строку, потому что теперь хватает и того что загружает из сервера. Потом можно оставить картинку по умолчанию */}
      {/* <img src='https://ak.picdn.net/shutterstock/videos/1021270852/thumb/1.jpg' alt='' /> */}
    </div>
    <div className={s.avatar}>
    <img src='https://ak.picdn.net/shutterstock/videos/1021270852/thumb/1.jpg' alt=' ' />
    </div>
    <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    <div>About me: {props.profile.data.aboutMe} </div>
    <div>Name: {props.profile.data.fullName} </div>
    <div>Job status: {props.profile.data.lookingForAJobDescription} </div>
  </div>
  )
}

export default ProfileInfo;