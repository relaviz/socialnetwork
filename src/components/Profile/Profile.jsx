import React from 'react';
// import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state} addPost={props.addPost}
        updateNewPostText={props.updateNewPostText} />
    </div>
  )
}

export default Profile;