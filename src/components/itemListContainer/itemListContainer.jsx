import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Title from '../Title';
import db from '../../db.json';
import fetchData from '../../utils/fetchData';
import loader from '../../loader.gif';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchData(db)
      .then((value) => {
        if (categoryId) {
          setProductList(value.filter((item) => item.category === categoryId));
        } else {
          setProductList(value);
        }
        setLoading(false);
      })
      .catch((err) => {
        setProductList(err.error);
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="item-list-container">
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
        <>
          <Title title={categoryId ? categoryId : 'All games'} />
          <ItemList productList={productList} />
        </>
      )}
    </div>
  );
};

export default ItemListContainer;
