import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

const CartWidget = () => {
  const { getCartTotalProducts } = useContext(CartContext);
  return (
    <Link to='/cart' className='cart-widget-container'>
      <i className='fa-solid fa-cart-shopping cart-widget'></i>
      {getCartTotalProducts() !== 0 ? <div>{getCartTotalProducts()}</div> : ''}
    </Link>
  );
};

export default CartWidget;
