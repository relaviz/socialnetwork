import React from 'react';
import s from './../Navbar.module.css';


const Icons = (props) => {

  return (
    <div className={s.iconItem} >
      <div>
        <img src={props.icon} alt='probe' />
      </div>
      <div>
        <h5>Vasylii Petrocitch</h5>
      </div>
    </div>

  )
}

export default Icons;