import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';

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
    <div>
    <img src={props.profile.photos.large} alt=' ' />
    </div>
    <div>About me: {props.profile.aboutMe} </div>
    <div>Name: {props.profile.fullName} </div>
    <div>Job status: {props.profile.lookingForAJobDescription} </div>
  </div>
  )
}

export default ProfileInfo;