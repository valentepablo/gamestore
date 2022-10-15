import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addItem = (item, quantity) => {
    if (quantity === 0) return;

    const addProducts = [...products];

    if (isInCart(item.id)) {
      const addProduct = addProducts.find((element) => element.id === item.id);
      addProduct.quantity += quantity;
      setProducts(addProducts);
    } else {
      const newItem = {
        id: item.id,
        name: item.title,
        price: item.price,
        quantity: quantity,
        picture: item.pictureUrl,
      };

      addProducts.push(newItem);

      setProducts(addProducts);
    }
  };

  const removeItems = (id) => {
    const productsCopy = [...products];
    const removed = productsCopy.filter((element) => element.id !== id);

    setProducts(removed);
  };

  const removeItem = (id) => {
    const productsCopy = [...products];
    const product = productsCopy.find((element) => element.id === id);

    if (product.quantity > 1) {
      product.quantity -= 1;
      setProducts(productsCopy);
    } else {
      const removed = productsCopy.filter((element) => element.id !== id);
      setProducts(removed);
    }
  };

  const clearCart = () => {
    setProducts([]);
  };

  const isInCart = (id) => {
    return products.some((element) => element.id === id);
  };

  const getCartTotalPrice = () => {
    return products.reduce((prev, current) => {
      return (prev += current.price * current.quantity);
    }, 0);
  };

  const getCartTotalProducts = () => {
    return products.reduce((acc, current) => {
      return acc + current.quantity;
    }, 0);
  };

  const data = {
    products,
    addItem,
    removeItems,
    removeItem,
    clearCart,
    getCartTotalPrice,
    getCartTotalProducts,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartProvider };
export default CartContext;
