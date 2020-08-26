import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map( p => <Post message={p.message}like={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
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