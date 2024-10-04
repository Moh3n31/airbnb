import React from 'react';

import MainIcon from '../images/airbnb 1.png';

export default function Nav () {
    return (
    <nav className='navbar'>
        <img src={MainIcon} className='main-logo' alt='logo'/>
    </nav>
    );
}