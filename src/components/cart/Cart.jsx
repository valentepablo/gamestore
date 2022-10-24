import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';
import CheckoutForm from './CheckoutForm';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Cart = () => {
  const { products, removeItems, removeItem, clearCart, getCartTotalPrice } =
    useContext(CartContext);

  const [formOpen, setFormOpen] = useState(false);

  const handleRemoveItem = (id) => {
    removeItems(id);
  };

  const handleRemoveSingleItem = (id) => {
    removeItem(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleGenerateOrder = (formData) => {
    const newOrder = {
      buyer: formData,
      items: products.map((product) => ({
        id: product.id,
        title: product.name,
        price: product.price,
      })),
      total: products.reduce((acc, product) => acc + product.price * product.quantity, 0),
    };

    // clearCart();

    const db = getFirestore();
    addDoc(collection(db, 'orders'), newOrder);
  };

  return (
    <div className='p-4 md:max-w-6xl md:mx-auto'>
      {products.length > 0 ? (
        <>
          <div className='pt-3 pb-6 border-b border-zinc-800'>
            <h2 className='text-sm font-semibold tracking-wider uppercase md:text-2xl text-sky-500'>
              Resumen de compra
            </h2>
            <div className='flex items-center justify-between'>
              <h2 className='mt-2 text-xl text-zinc-400'>
                Precio total:{' '}
                <span className='ml-2 text-3xl font-bold text-zinc-400'>
                  $ {getCartTotalPrice()}
                </span>
              </h2>
              <button
                className='flex items-center justify-center p-1 pr-1.5 text-sm font-extrabold tracking-wide text-red-900 uppercase bg-red-400 rounded-md hover:bg-red-500 transition'
                onClick={handleClearCart}>
                <span className='w-5'>
                  <svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                Vaciar
              </button>
            </div>
          </div>

          <div className={formOpen ? 'hidden' : 'grid grid-cols-1 gap-6 mt-6 md:mb-4'}>
            {products.map((product) => (
              <div key={product.id} className='flex items-center gap-4 md:gap-6'>
                <img
                  className='object-cover object-top w-24 h-24 md:w-40 md:h-40'
                  src={product.picture}
                  alt={product.name}
                />
                <div className='flex items-center grow'>
                  <div className='grow'>
                    <h3 className='text-sm font-extrabold tracking-widest uppercase md:mb-2 md:text-xl text-zinc-500'>
                      {product.name}
                    </h3>
                    <p className='text-2xl font-extrabold md:text-3xl text-sky-500'>
                      ${product.price * product.quantity}
                    </p>
                    <p className='mt-4 text-sm md:mt-8 text-zinc-500'>
                      Cantidad: {product.quantity}
                    </p>
                  </div>
                  <div className='flex gap-2 ml-4 md:gap-6 text-zinc-400'>
                    <div onClick={() => handleRemoveSingleItem(product.id)}>
                      <svg
                        className='w-6 transition cursor-pointer md:w-8 hover:fill-red-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                    <div onClick={() => handleRemoveItem(product.id)}>
                      <svg
                        className='w-6 transition cursor-pointer md:w-8 hover:fill-red-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={() => setFormOpen(!formOpen)}
              className='w-full p-4 mt-2 text-sm font-extrabold tracking-wider text-center uppercase transition border-2 border-transparent rounded-md md:mt-8 md:mx-auto md:w-80 text-zinc-800 bg-sky-600 hover:bg-zinc-900 hover:text-sky-500 hover:border-sky-500'>
              Generar orden de compra
            </button>
          </div>
          <div
            className={
              formOpen
                ? 'absolute grid place-items-center inset-0 z-40  md:backdrop-blur md:backdrop-brightness-50  md:backdrop-grayscale'
                : ''
            }>
            <CheckoutForm
              isOpen={formOpen}
              setIsOpen={setFormOpen}
              handleGenerateOrder={handleGenerateOrder}
              clearCart={clearCart}
            />
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center'>
          <div className='mt-6 text-lg text-center md:text-2xl'>
            No se encontraron <strong>juegos</strong> en tu carrito...
          </div>
          <Link
            to='/'
            className='inline-block p-4 mt-4 text-sm font-extrabold tracking-wider text-center uppercase transition border-2 border-transparent rounded-md w-80 text-zinc-800 bg-sky-600 hover:bg-zinc-900 hover:text-sky-500 hover:border-sky-500'>
            Ver juegos!
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
