import React from 'react';
import s from './../Navbar.module.css';


const Icons = (props) => {
  debugger;
  return (
      <div className={s.icon} >
        <img src={props.icon} alt='probe' />
      </div>
      
  )
}

export default Icons;