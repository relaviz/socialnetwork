import React from 'react';
// import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ profile, status, updateStatus }) => {

  return (
    <div>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;