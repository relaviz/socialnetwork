import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
 
  let postsElement = props.posts.posts.map( p => <Post message={p.message}like={p.likesCount} />);

  let newPostElement = React.createRef();

  let addPost = () => {

    let text = newPostElement.current.value;
     props.addPost(text);
     props.updateNewPostText('');
  }; 

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className={s.postsBlock}>
      <div>
        <textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newPostText} />
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