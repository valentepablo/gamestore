import React from 'react';

const Item = ({ product }) => {
  let imgUrl = {
    backgroundImage: `url(${product.pictureUrl})`,
  };

  return (
    <li className="item" id={product.id}>
      <div style={imgUrl}>
        <div className="item-info">
          <h2>{product.title}</h2>
          <span>${product.price}</span>
        </div>
      </div>
    </li>
  );
};

export default Item;
