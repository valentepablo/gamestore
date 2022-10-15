import React, { useState } from 'react';

const ItemCount = ({ onAdd }) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const decreaseQuantity = () => {
    setItemQuantity(itemQuantity - 1);
  };
  const increaseQuantity = () => {
    setItemQuantity(itemQuantity + 1);
  };

  const handleOnAdd = () => {
    onAdd(itemQuantity);
  };

  return (
    <>
      <div className='product-controls'>
        <button onClick={decreaseQuantity}>-</button>
        <span>{itemQuantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={handleOnAdd} className='add-item-button'>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
