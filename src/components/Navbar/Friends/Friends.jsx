import React from 'react';
import s from './../Navbar.module.css';
import { NavLink } from 'react-router-dom';
import Icons from './Icons';

let icon = [
    { id: 1, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR3snEv9CcY-w2OVD4wwVZmTS5QuFRnO2xZbg&usqp=CAU' },
    { id: 2, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQhlUJ9_4Au3qrw7-DlLRAC0N14CdTgfzHUsg&usqp=CAU' },
    { id: 3, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTS2ACqki7yvVTzTTwm1zd82RGybYE5uQjLBg&usqp=CAU' },
    { id: 4, icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQt8j1i9HnXi9L1vqX6y5Xi18r-NnDXnMfbg&usqp=CAU' }
]

let iconElement = icon.map(icon => <Icons id={icon.id} icon={icon.icon} />);


const Friends = (props) => {

    return (
        <div>
            <div className={s.item}>
                <NavLink to='/friends' activeClassName={s.active}><h1>Friends</h1></NavLink>
            </div>
            <div className={s.icon}>
                <NavLink to='/friends' activeClassName={s.active}>{iconElement}</NavLink>
            </div>
        </div>

    )
}

export default Friends; 