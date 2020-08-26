import React from 'react';
import s from './../Navbar.module.css';


const Icons = (props) => {

  return (
      <div className={s.icon} >
        <img src={props.icon} alt='probe' /><h4>name</h4>
      </div>
      
  )
}

export default Icons;