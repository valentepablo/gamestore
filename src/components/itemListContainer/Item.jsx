import React from 'react';

const Item = ({ product }) => {
  return (
    <li
      className='overflow-hidden transition border rounded-md border-zinc-800/40 hover:bg-zinc-800/40'
      id={product.id}>
      <img className='w-full' src={product.pictureUrl} alt={product.title} />
      <div className='px-2 py-1 md:px-4 md:py-2'>
        <h2 className='text-sm text-zinc-500 md:text-base'>{product.title}</h2>
        <span className='text-lg font-bold tracking-wide tabular-nums md:text-2xl'>
          ${product.price}
        </span>
      </div>
    </li>
  );
};

export default Item;
