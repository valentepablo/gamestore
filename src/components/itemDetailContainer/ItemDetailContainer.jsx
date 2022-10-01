import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import loader from '../../loader.gif';
import fetchData from '../../utils/fetchData';
import db from '../../db.json';

const ItemDetailContainer = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetchData(db).then((response) => {
      const filteredProduct = response.filter((item) => {
        return item.id === parseInt(id);
      });
      setSelectedProduct(filteredProduct[0]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="item-detail-container">
      {loading ? (
        <div className="loader-container">
          <img
            src={loader}
            className="loader"
            alt="loading spinner while searching in database"
          />
          <p>Cargando...</p>
        </div>
      ) : (
        <ItemDetail product={selectedProduct} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
