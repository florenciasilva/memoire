import React from 'react';
import LogOutBtn from './LogOutBtn';
import { Header, Logo } from './style';

const Navbar = () => (
    <Header>
        <nav>
            <Logo className="far fa-sticky-note"></Logo>
            <LogOutBtn />
        </nav>
    </Header>
);

export default Navbar;