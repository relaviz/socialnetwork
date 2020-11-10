import React from 'react';
// import s from './Profile.module.css';
import ProfileInfo from './Profileinfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {

  return (
    <div>
      <ProfileInfo
        savePhoto={savePhoto}
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        saveProfile={saveProfile} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;