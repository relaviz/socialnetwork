import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../../redux/profile-reducer'

const MyPosts = (props) => {

  let postsElement = props.posts.posts.map(p => <Post message={p.message} like={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {

    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newPostText} />
      </div>
      <div>
        <button onClick={addPost} >Add post</button>
      </div>
      <div className={s.posts}>
        New posts
        </div>
      <div className={s.post}>
        {postsElement}
      </div>
    </div>
  )
}

export default MyPosts;