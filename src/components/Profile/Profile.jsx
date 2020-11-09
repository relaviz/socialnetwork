import React from 'react';
// import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ isOwner, profile, status, updateStatus, savePhoto }) => {

  return (
    <div>
      <ProfileInfo savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateStatus={updateStatus} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;