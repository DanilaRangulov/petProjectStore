import React from 'react';
import classes from './Navbar.module.scss'
import logo from 'shared/assets/logo/logo.png'
const Navbar = () => {
    return (
        <div className={`${classes.Navbar}`}>
            <div className={`${classes.main} container`}>
                <img src={logo} alt={'logo'} />
                <a href={'/'} className={'font-medium20'}>Главная</a>
            </div>
        </div>
    );
};

export default Navbar;