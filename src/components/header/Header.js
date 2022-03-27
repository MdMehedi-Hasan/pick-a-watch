import React from 'react';
import './header.css'
import logo from '../../logo.jpg'
const Header = () => {
    return (
        <div className='header'>
            <header className='container'>
                <div>
                <img width={'7%'} src={logo} alt="images" />
                <strong>Picka-watch</strong>
                </div>
                <div>
                 <i class="fas fa-cart-plus"></i><sup>0</sup>
                </div>
            </header>
        </div>
    );
};

export default Header;