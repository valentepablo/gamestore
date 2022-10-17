import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

const CartWidget = ({ menuOpen }) => {
  const { getCartTotalProducts } = useContext(CartContext);
  return (
    <Link
      to='/cart'
      className={`${
        menuOpen ? '' : '-translate-x-24 md:translate-x-0'
      } md:absolute z-20 flex items-center gap-2 md:px-4 md:-right-20 left-0 md:left-auto md:top-auto text-lg font-semibold tracking-widest uppercase hover:text-sky-500`}>
      {menuOpen ? 'Cart' : ''}
      <i className='text-xl fa-solid fa-cart-shopping hover:text-sky-500'></i>
      {getCartTotalProducts() !== 0 ? <div>{getCartTotalProducts()}</div> : ''}
    </Link>
  );
};

export default CartWidget;
