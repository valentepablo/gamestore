import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import CartWidget from '../cart/CartWidget';
import LinkList from './LinkList';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='relative z-10 bg-zinc-900 md:shadow-md'>
      <nav className='relative flex px-4 py-4 shadow-md md:shadow-none md:items-center md:container md:mx-auto md:justify-between'>
        <Link to='/'>
          <Logo />
        </Link>
        <button
          onClick={handleOpenMenu}
          className='absolute flex items-center text-sm font-semibold tracking-widest uppercase cursor-pointer md:hidden right-3 top-6 hover:text-sky-500'>
          Categories
          {menuOpen ? (
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'
              />
            </svg>
          )}
        </button>
        <LinkList menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className='hidden md:items-center md:flex'>
          {menuOpen ? '' : <CartWidget menuOpen={menuOpen} />}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
