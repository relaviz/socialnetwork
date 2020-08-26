import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return(
      <div className={s.item}>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRXoMiMVOgz42hYPg4wp1OKrKV6Srs_Xi2wiQ&usqp=CAU' alt='avatar' />
        </div>
        {props.message}
        <div>
        <span>{props.like} like</span>
        </div>
      </div>
      
  )
}

export default Post ;