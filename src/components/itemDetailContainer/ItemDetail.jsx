import React from 'react';
import ItemCount from '../itemCount/ItemCount';

const ItemDetail = ({ product }) => {
  return (
    <div className="item-detail">
      <div className="item-detail-images">
        <img src={product.pictureUrl} />
        <div className="item-detail-images-all"></div>
      </div>
      <div className="item-detail-panel">
        <div className="item-detail-info">
          <h4>{product.title}</h4>
          <p>{product.description}</p>
          <span className="item-detail-info-price">$ {product.price}</span>
        </div>
        <div className="item-detail-item-count">
          <ItemCount />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
