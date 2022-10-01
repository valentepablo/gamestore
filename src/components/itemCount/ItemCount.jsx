import React, { useState, useEffect } from 'react';

const ItemCount = () => {
  const [itemQuantity, setItemQuantity] = useState(1);
  const [availableStock, setAvailableStock] = useState(10);

  const decreaseQuantity = () => {
    if (itemQuantity <= 1) return;
    setItemQuantity(itemQuantity - 1);
  };
  const increaseQuantity = () => {
    if (itemQuantity === availableStock) return;
    setItemQuantity(itemQuantity + 1);
  };
  const onAdd = () => {
    if (availableStock - itemQuantity < 0) return;
    setAvailableStock(availableStock - itemQuantity);
  };

  useEffect(() => {
    if (availableStock < itemQuantity) {
      setItemQuantity(availableStock);
    }
  }, [availableStock, itemQuantity]);

  return (
    <>
      <p>Stock disponible: {availableStock}</p>

      <div className="product-controls">
        <button onClick={decreaseQuantity}>-</button>
        <span>{itemQuantity}</span>
        <button onClick={increaseQuantity}>+</button>
      </div>
      <button onClick={onAdd} className="add-item-button">
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
