import React from 'react';
import Link from './Link';
import CartWidget from '../cartWidget/CartWidget';

const LinkList = () => {
  return (
    <ul className="nav-list">
      <Link value="#" name="Inicio" />
      <Link value="#" name="Juegos" />
      <CartWidget />
    </ul>
  );
};

export default LinkList;
