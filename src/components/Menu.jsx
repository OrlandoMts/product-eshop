import React from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/Menu.scss';
import iconClose from '@icons/icon-close.svg';

const Menu = () => {

    const { handleMenu } = React.useContext(AppContext)

    return (
        <div className='Menu'>
            <img src={iconClose} alt="close menu" className='Menu__icon-close' onClick={handleMenu} />
            <ul className='Menu__content'>
                <li><a href="/">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul> 
        </div>
    )
}

export { Menu }
