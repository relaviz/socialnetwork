import React from 'react';
import preload from '../../../img/loading5.gif';
import s from './Preloader.module.css'


let Preloader = (props) => {
    return (
        <div className={s.center}><img src={preload} alt='load' /></div>
    )
}

export default Preloader;