import React from 'react';
import s from './../Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Icons from './Icons';

const Friends = (props) => {

    let iconElement = props.state.icon.map(icon => <Icons id={icon.id} icon={icon.icon} />);

    return (
        <div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.active}><h1>Friends</h1></NavLink>
            </div>
            <div className={s.icon}>
                {iconElement}
            </div>
        </div>

    )
}

export default Friends; 