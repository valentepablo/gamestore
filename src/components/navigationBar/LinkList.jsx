import React, { useState, useEffect } from 'react';
import CartWidget from '../cart/CartWidget';
import { Link } from 'react-router-dom';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const LinkList = ({ menuOpen, setMenuOpen }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoryCollection = collection(db, 'categories');
    getDocs(categoryCollection).then((result) => {
      setCategories(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const handleMenuOpen = () => {
    if (window.innerWidth < 700) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <ul
      className={`${
        menuOpen ? '' : '-translate-x-full md:translate-x-0'
      } top-[50px] absolute px-4 transition transform md:px-0 divide-y md:divide-none md:h-auto shadow-md md:shadow-none divide-zinc-700/20 left-0 w-full my-6 md:z-auto z-[1] md:static md:my-0 md:flex md:items-center md:w-auto bg-zinc-900`}>
      <li className='py-5 pt-8 md:py-0 md:my-0' key='all-games' onClick={handleMenuOpen}>
        <Link
          className='text-lg font-semibold tracking-widest uppercase select-none md:text-sm md:mx-4 hover:text-sky-500'
          to='/'>
          All Games
        </Link>
      </li>

      {categories.map((category) => {
        return (
          <li className='py-5 md:my-0 md:py-0' key={category.id} onClick={handleMenuOpen}>
            <Link
              className='text-lg font-semibold tracking-widest uppercase select-none md:text-sm md:mx-4 hover:text-sky-500'
              to={`/category/${category.categoryName}`}>
              {category.categoryName}
            </Link>
          </li>
        );
      })}
      {menuOpen && (
        <li className='py-5 md:my-0 md:py-0' onClick={handleMenuOpen}>
          <CartWidget menuOpen={menuOpen} />
        </li>
      )}
    </ul>
  );
};

export default LinkList;
