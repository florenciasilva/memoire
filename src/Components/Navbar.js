import React from 'react';
import { Link } from 'react-router-dom';
import LogOutBtn from './LogOutBtn';


const Navbar = () => (
    <header>
        <nav>
            <Link to="/">Log In</Link>
            <Link to="/register">Register</Link>
            <LogOutBtn />
        </nav>
    </header>
);

export default Navbar;