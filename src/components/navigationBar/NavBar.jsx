import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import CartWidget from '../cart/CartWidget';
import LinkList from './LinkList';

const NavBar = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <Link to='/'>
          <Logo />
        </Link>
        <LinkList />
        <CartWidget />
      </nav>
    </header>
  );
};

export default NavBar;
