import React, { useRef } from 'react';

const CheckoutForm = ({ handleGenerateOrder, isOpen, setIsOpen }) => {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleGenerateOrder({
      name: nameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    });
  };

  return (
    // {absolute left-0 top-0 z-50}
    <div
      className={
        isOpen
          ? 'border  border-zinc-800/20 w-full h-screen py-10 px-6 md:rounded-md bg-zinc-900 md:h-auto md:w-[500px]  md:shadow-xl '
          : 'hidden'
      }>
      <div className='md:w-full md:mx-auto'>
        <button
          className='flex items-center py-1 pr-2 mb-8 text-sm font-extrabold tracking-wide uppercase transition rounded-md bg-sky-400 text-sky-800 hover:bg-sky-500'
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
              clipRule='evenodd'
            />
          </svg>
          Volver al carrito
        </button>
        <div className='border-b border-zinc-700'></div>
        <form onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor='name'
              className='block mt-6 text-sm font-extrabold tracking-widest uppercase text-zinc-500'>
              Nombre
            </label>
            <input
              ref={nameRef}
              type='text'
              id='name'
              className='w-full px-4 py-4 text-lg rounded-md outline-none text-zinc-400 hover:bg-zinc-800/60 bg-zinc-800/40'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block mt-6 text-sm font-extrabold tracking-widest uppercase text-zinc-500'>
              Email
            </label>
            <input
              ref={emailRef}
              type='email'
              id='email'
              className='w-full px-4 py-4 text-lg rounded-md outline-none text-zinc-400 hover:bg-zinc-800/60 bg-zinc-800/40'
            />
          </div>
          <div>
            <label
              htmlFor='tel'
              className='block mt-6 text-sm font-extrabold tracking-widest uppercase text-zinc-500'>
              Telefono
            </label>
            <input
              ref={phoneRef}
              type='tel'
              id='tel'
              className='w-full px-4 py-4 text-lg rounded-md outline-none text-zinc-400 hover:bg-zinc-800/60 bg-zinc-800/40 '
            />
          </div>
          <button
            type='submit'
            className='w-full p-4 mt-10 text-sm font-extrabold tracking-wider text-center uppercase transition border-2 border-transparent rounded-md md:mt-12 text-zinc-800 bg-sky-600 hover:bg-zinc-900 hover:text-sky-500 hover:border-sky-500'>
            Finalizar compra
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
