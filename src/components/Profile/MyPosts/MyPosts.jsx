import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map( p => <Post message={p.message}like={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
     props.addPost(text);
     newPostElement.current.value = '';
  }; 

  return (
    <div className={s.postsBlock}>
      <div>
        <textarea ref={newPostElement} ></textarea>
      </div>
      <div>
        <button onClick={ addPost } >Add post</button>
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