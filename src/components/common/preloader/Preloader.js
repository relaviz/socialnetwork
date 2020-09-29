import React from 'react';
import preload from '../../../img/loading5.gif';


let Preloader = (props) => {
    return (
        <div><img src={preload} alt='load' /></div>
    )
}

export default Preloader;