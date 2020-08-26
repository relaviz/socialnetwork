import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
  <div className={s.content}>
    <div>
      <img src='https://i.imgur.com/RRUe0Mo.png' alt='' />
    </div>
    <div>ava+discription</div>
  </div>
  )
}

export default ProfileInfo;