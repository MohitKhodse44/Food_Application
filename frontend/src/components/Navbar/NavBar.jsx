import React from 'react';
import './NavBar.css';
import { assets } from './../../assets/assets';
import { Container, Button } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container className='navbar'>
            <img src={assets.logo} alt="Logo" className='logo' />
            <ul className='navbar-menu'>
                <li className='navbar-item'>Menu</li>
                <li className='navbar-item'>Mobile</li>
                <li className='navbar-item'>Home</li>
                <li className='navbar-item'>Contact Us</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt="Search" className='search-icon' />
                <img src={assets.basket_icon} alt="Basket" className='basket-icon' />
                <Button className='signin-button' variant="outline-warning"><span style={{ color: 'black' }}>sign in</span></Button>{' '}            </div>
        </Container>
    );
};

export default NavBar;
