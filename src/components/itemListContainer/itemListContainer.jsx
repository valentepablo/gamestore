import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Title from '../Title';
import loader from '../../loader.gif';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let itemsCollection = [];

    if (category) {
      itemsCollection = query(collection(db, 'items'), where('category', '==', category));
    } else {
      itemsCollection = collection(db, 'items');
    }

    getDocs(itemsCollection).then((result) => {
      setProductList(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, [category]);

  return (
    <div className='item-list-container'>
      {loading ? (
        <div className='loader-container'>
          <img src={loader} className='loader' alt='loading spinner while searching in database' />
          <p>Cargando...</p>
        </div>
      ) : (
        <>
          <Title title={category ? category : 'All games'} />
          <ItemList productList={productList} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
