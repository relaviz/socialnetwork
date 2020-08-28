import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
  <div className={s.content}>
    <div>
      <img src='https://ak.picdn.net/shutterstock/videos/1021270852/thumb/1.jpg' alt='' />
    </div>
    <div>ava+discription</div>
  </div>
  )
}

export default ProfileInfo;