import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import loader from '../../loader.gif';
import { getFirestore, getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();

    const item = doc(db, 'items', `${id}`);
    getDoc(item).then((result) => {
      setSelectedProduct({ id: result.id, ...result.data() });
    });

    setLoading(false);
  }, [id]);

  return (
    <div className=''>
      {loading ? (
        <div className='flex flex-col items-center justify-center gap-6 my-6'>
          <img src={loader} className='w-12' alt='loading spinner while searching in database' />
          <p>Cargando...</p>
        </div>
      ) : (
        <ItemDetail product={selectedProduct} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
