import React from 'react';
import { Menu } from '../components/Menu';
import { AppContext } from '../context/AppContext';
import '../styles/Header.scss';
import iconMenu from '@icons/icon-menu.svg';
import logo from '@icons/logo.svg';
import iconCart from '@icons/icon-cart.svg';
import picture from '@images/image-avatar.png';

const Header = () => {
    
    const { quantity, toggleMenu, handleMenu } = React.useContext(AppContext);

    return (
        <nav className="Header">
            <div className='Header__menu'>
                {toggleMenu && <Menu />}
                <img src={iconMenu} alt="menu" className='Header--icon' onClick={handleMenu}/>
                <img src={logo} alt="sneakers" className='Header--logo' />

                <div className='Menu__nav--left'>
                    <ul>
                        <li><a href="/">Collections</a></li>
                        <li><a href="/">Men</a></li>
                        <li><a href="/">Women</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </div>
            
            <div className='Menu__nav--right'>
                <ul>
                    <li>
                        <img src={iconCart} alt="botton cart" className='nav--right-cart'/>
                        {quantity > 0 ? <div>{quantity}</div> : null}
                    </li>
                    <li>
                        <img src={picture} alt="Profile photo" className='nav--right-photo'/>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
}

export { Header }
