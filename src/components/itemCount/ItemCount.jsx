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
      <div className='flex items-center justify-center p-2 mt-6 rounded-md md:mt-16 bg-zinc-800'>
        <button
          className='w-12 mx-8 text-4xl font-bold rounded-md cursor-pointer select-none text-zinc-400 hover:text-sky-500'
          onClick={decreaseQuantity}>
          -
        </button>
        <span className='inline-flex text-lg font-semibold select-none'>{itemQuantity}</span>
        <button
          className='w-12 mx-8 text-4xl font-bold rounded-md cursor-pointer select-none text-zinc-400 hover:text-sky-500'
          onClick={increaseQuantity}>
          +
        </button>
      </div>
      <button
        onClick={handleOnAdd}
        className='w-full p-4 mt-2 text-sm font-extrabold tracking-wider text-center uppercase transition border-2 border-transparent rounded-md text-zinc-800 bg-sky-600 hover:bg-zinc-900 hover:text-sky-500 hover:border-sky-500'>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
