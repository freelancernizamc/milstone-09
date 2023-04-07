import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink/ActiveLink';
import './Header.css';

const Header = () => {
    return (
        <nav className='text-2xl'>
            <ActiveLink to="/" className='navbar'>Home</ActiveLink>
            <ActiveLink to="/friends" className='navbar'>Friends</ActiveLink>
            <ActiveLink to="/posts" className='navbar'>Posts</ActiveLink>
            <ActiveLink to="/about" className='navbar'>About</ActiveLink>
            <ActiveLink to="/contact" className='navbar'>Contact Me</ActiveLink>
        </nav>
    );
};

export default Header;