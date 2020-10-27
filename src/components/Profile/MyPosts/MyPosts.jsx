import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10)

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
      <Field placeholder={"Add post"} name={"newPostText"} component={Textarea} 
      validate={ [required, maxLength10] }  />
    </div>
    <div>
      <button>Send</button>
    </div>
  </form>
}

const PostReduxForm = reduxForm({
  form: 'postForm'
})(AddPostForm)

export default MyPosts;