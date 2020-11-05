import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = ({ id, name }) => {
  let path = '/dialogs/' + id
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={path} activeClassName={s.active}>{name}</NavLink>
    </div>
  )
}

export default DialogsItem;