import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
  
    return <header className={s.header}>
    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Google_Lens_-_new_logo.png/600px-Google_Lens_-_new_logo.png' alt='' />
    <div className={s.loginBlock}>
      { props.isAuth 
      ? <div> {props.login} <button onClick={props.logout} >Logout</button> </div> 
      : <NavLink to={'/login'}>Login</NavLink> }
    </div>
  </header>
}

export default Header;

  