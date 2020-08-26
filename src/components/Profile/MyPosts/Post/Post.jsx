import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return(
      <div className={s.item}>
        <div>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBeh9p2Q2aNTph1AFnDCsJ2i6J2H_RTikJLw&usqp=CAU' alt='avatar' />
        </div>
        {props.message}
        <div>
        <span>{props.like} like</span>
        </div>
      </div>
      
  )
}

export default Post ;