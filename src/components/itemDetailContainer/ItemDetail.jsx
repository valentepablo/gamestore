import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../itemCount/ItemCount';
import CartContext from '../../contexts/CartContext';

const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  const onAdd = (quantity) => {
    setAmount(quantity);
  };

  useEffect(() => {
    if (amount === 0) return;
    addItem(product, amount);
  }, [amount]);

  return (
    <div className='item-detail'>
      <div className='item-detail-images'>
        <img src={product.pictureUrl} alt={product.title} />
        <div className='item-detail-images-all'></div>
      </div>
      <div className='item-detail-panel'>
        <div className='item-detail-info'>
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <span className='item-detail-info-price'>$ {product.price}</span>
        </div>
        <div className='item-detail-item-count'>
          {amount === 0 ? (
            <ItemCount onAdd={onAdd} />
          ) : (
            <>
              <Link to='/' className='ver-juegos-btn-invert text-center'>
                Ver mas juegos
              </Link>
              <Link to='/cart' className='add-item-button text-center'>
                Finalizar compra
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
