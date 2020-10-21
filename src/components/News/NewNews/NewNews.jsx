import React from 'react';
import s from './../News.module.css';


const NewNews = (props) => {
  
  return (
    <div className={s.news}>{props.news}</div>
  )
}



export default NewNews;