import React from 'react';
import Logo from './Logo';
import LinkList from './LinkList';

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Logo />
        <LinkList />
      </nav>
    </header>
  );
};

export default NavBar;
