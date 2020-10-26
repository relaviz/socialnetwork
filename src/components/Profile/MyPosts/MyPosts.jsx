import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElement = props.posts.map(p => <Post message={p.message} like={p.likesCount} />);

  let addNewPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <PostReduxForm onSubmit={addNewPost} />
      <div className={s.post}>
        {postsElement}
      </div>
    </div>
  )
}

const AddPostForm = props => {

  return <form onSubmit={props.handleSubmit}>
    <div>
      <Field placeholder={"Add post"} name={"newPostText"} component={"textarea"} />
    </div>
    <div>
      <button>Add post</button>
    </div>
  </form>
}

const PostReduxForm = reduxForm({
  form: 'postForm'
})(AddPostForm)

export default MyPosts;