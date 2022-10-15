import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, getDocs, collection } from 'firebase/firestore';

const LinkList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const categoryCollection = collection(db, 'categories');
    getDocs(categoryCollection).then((result) => {
      setCategories(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  return (
    <ul className='nav-list'>
      <Link to='/'>All Games</Link>

      {categories.map((category) => {
        return (
          <Link to={`/category/${category.categoryName}`} key={category.id}>
            {category.categoryName}
          </Link>
        );
      })}
    </ul>
  );
};

export default LinkList;
