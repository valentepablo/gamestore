import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../contexts/CartContext';

const Cart = () => {
  const { products, removeItems, removeItem, clearCart, getCartTotalPrice } =
    useContext(CartContext);

  const handleRemoveItem = (id) => {
    removeItems(id);
  };

  const handleRemoveSingleItem = (id) => {
    removeItem(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className='cart-container'>
      {products.length > 0 ? (
        <>
          <div className='cart-panel'>
            <h2 className='section-title'>Resumen de compra</h2>
            <div className='cart-info'>
              <h2>Precio total: ${getCartTotalPrice()}</h2>
              <button className='vaciar-carrito' onClick={handleClearCart}>
                <span>
                  <svg fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z'
                      clipRule='evenodd'
                    />
                  </svg>
                </span>
                Vaciar carrito
              </button>
            </div>
          </div>

          <div className='products-container'>
            {products.map((product) => (
              <div key={product.id} className='product-card'>
                <img src={product.picture} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price * product.quantity}</p>
                <p>x{product.quantity}</p>
                <div className='delete-icon'>
                  <div onClick={() => handleRemoveSingleItem(product.id)}>
                    <svg
                      className='trash-icon'
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
                      className='trash-icon'
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
            ))}
          </div>
        </>
      ) : (
        <>
          <div className='not-fount-message'>
            No se encontraron <strong>juegos</strong> en tu carrito...
          </div>
          <Link to='/' className='ver-juegos-btn'>
            Ver juegos!
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
