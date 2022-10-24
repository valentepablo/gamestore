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
    <div className='p-4 md:mt-12 md:max-w-4xl md:mx-auto md:grid md:grid-cols-2 md:gap-6'>
      <div className=''>
        <img className='w-full' src={product.pictureUrl} alt={product.title} />
      </div>
      <div className='py-2'>
        <div>
          <h4 className='font-extrabold tracking-widest uppercase text-md text-zinc-500 md:text-2xl'>
            {product.title}
          </h4>
          <p className='mt-2 md:mt-6 text-zinc-300 md:text-lg'>{product.description}</p>
          <span className='block my-2 text-3xl font-extrabold md:text-5xl md:my-8 text-sky-500'>
            $ {product.price}
          </span>
          <p className='text-sm text-zinc-600'>Stock disponible: {product.stock}</p>
        </div>
        <div>
          {amount === 0 ? (
            <ItemCount onAdd={onAdd} stock={product.stock} />
          ) : (
            <>
              <Link
                to='/'
                className='block w-full p-4 mt-6 text-sm font-extrabold tracking-wider text-center uppercase transition border-2 rounded-md md:mt-16 border-sky-500 text-sky-500 hover:bg-sky-600 hover:text-zinc-800 hover:border-transparent'>
                Ver mas juegos
              </Link>
              <Link
                to='/cart'
                className='block w-full p-4 mt-2 text-sm font-extrabold tracking-wider text-center uppercase transition border-2 border-transparent rounded-md text-zinc-800 bg-sky-600 hover:bg-zinc-900 hover:text-sky-500 hover:border-sky-500'>
                Ir al carrito
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
