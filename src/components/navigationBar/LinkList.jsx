import React from 'react';
import { Link } from 'react-router-dom';

const LinkList = () => {
  return (
    <ul className="nav-list">
      <Link to="/">All Games</Link>
      <Link to="/category/adventure">Adventure</Link>
      <Link to="/category/survival">Survival</Link>
      <Link to="/category/action">Action</Link>
      <Link to="/category/sport">Sport</Link>
      <Link to="/category/shooter">Shooter</Link>
    </ul>
  );
};

export default LinkList;
